const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')
const Applicant = require('../models/Applicant');
const Application = require('../models/Application');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, user, pass } = process.env;
const fetchApplicant = require('../middleware/fetchApplicant');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});
const upload = multer({ storage: storage });
const pUpload = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]);
const nodemailer = require('nodemailer');

router.post('/registration', async (req, res) => {
    try {

        const existing_applicant = await Applicant.findOne({ $or: [{ mobile: req.body.mobile }, { email: req.body.email }] });

        if (existing_applicant) {
            res.json({ "success": false, "message": "applicant already exists" });
        }
        else {

            const uniqueString =  uuidv4();
            const registrationId = uniqueString.split('-')[0] + uniqueString.split('-')[1];

            const newApplicant = await Applicant.create({
                firstname: req.body.firstname,
                middlename: req.body.middlename,
                lastname: req.body.lastname,
                dob: req.body.dob,
                category: req.body.category,
                qualification: req.body.qualification,
                mobile: req.body.mobile,
                email: req.body.email,
                gender: req.body.gender,
                registrationId: registrationId,
                password: req.body.dob.split('-')[0] + req.body.dob.split('-')[1] + req.body.dob.split('-')[2],
                disabilityPercentage: req.body.disabilityPercentage,
                PwBD_UDID: req.body.PwBD_UDID,
                PwBD_category: req.body.PwBD_category,
            });

            // const mailTransport = nodemailer.createTransport({
            //     host: "smtpout.asia.secureserver.net",
            //     secure: true,
            //     port: 465,
            //     auth: {
            //         user: user,
            //         pass: pass
            //     }
            // });
        
            // const mailOptions = {
            //     from: process.env.user,
            //     to: newApplicant.email,
            //     subject: `Login Credentials For Recruitment Process`,
            //     html: `<h3>Credentials</h3>
            //     <h4>Registration ID: ${newApplicant.registrationId}</h4>
            //     <h4>Password: ${newApplicant.password}</h4>`,
            // };

            // mailTransport.sendMail(mailOptions).then(() => {
            //     console.log('Email sent successfully');
            // }).catch((err) => {
            //     console.log('Failed to send email');
            //     console.error(err);
            // });
        

            res.json({ "success": true, "message": "applicant successfully registered" })
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


router.post('/login', async (req, res) => {

    try {
        const { registrationId, password } = req.body;

        const existingUser = await Applicant.findOne({ registrationId, password });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "incorrect credentials" });
        }
        else {
            const authToken = jwt.sign(existingUser.id, SECRET_KEY);
            res.json({ "success": true, "authToken": authToken });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }

})


router.put('/reset-password', async (req, res) => {

    try {
        const { firstname, middlename, lastname, dob } = req.body;

        const existingUser = await Applicant.findOne({ firstname, middlename, lastname, dob });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "incorrect credentials" });
        } else {
            existingUser.password = uuidv4();
            await existingUser.save();
        }

        res.json({ success: true, "message": "password successfully reset" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }

})


router.get('/fetch-data', fetchApplicant, async (req, res) => {
    try {
        let id = req.id;
        const applicant = await Applicant.findById(id).select("-password");
        res.json({ "success": true, "applicant": applicant });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


router.post('/submit-form', fetchApplicant, async (req, res) => {
    try {
        const newApplication = await Application.create({
            applicant: req.id,
            position: req.body.position,
            general_information: { correspondence_address: req.body.correspondence_address, permanent_address: req.body.permanent_address },
            educational_qualification: req.body.educational_qualification,
            academic_experience: req.body.academic_experience,
            industry_experience: req.body.industry_experience,
            ug_teaching_experience: req.body.ug_teaching_experience,
            pg_teaching_experience: req.body.pg_teaching_experience,
            supervision_experience: req.body.supervision_experience,
            research_papers: req.body.research_papers
        });

        res.json({ "success": true, "message": "application successfully submitted", "id": newApplication._id })

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


router.post('/photo-upload', pUpload, async (req, res) => {

    try {
        const existingApplication = await Application.findOne({ _id: req.headers.id });

        if (!existingApplication) {
            return res.status(400).json({ success: false, message: "application does not exist" });
        } else {
            existingApplication.photos = { photo_path: 'uploads/' + req.files['photo'][0].filename, signature_path: 'uploads/' + req.files['signature'][0].filename };

            await existingApplication.save();

        }

        res.json({ success: true, "message": "images successfully uploaded" });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }

})

router.get('/fetch-application-status', fetchApplicant, async (req, res) => {
    try {
        const applications = await Application.find({applicant: req.id}).select("position");
        res.json({ "success": true, "applications": applications });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

router.post('/fetch-application-data', fetchApplicant, async (req, res) => {
    try {
        const application = await Application.findOne({_id: req.body.application_id});
        const applicant = await Applicant.findOne({_id: req.id});
        res.json({ "success": true, "applicant": applicant,"application": application });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;