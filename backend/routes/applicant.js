const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid')
const Applicant = require('../models/Applicant');
const Application = require('../models/Application');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, user, pass, BASE_ID, ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;
const fetchApplicant = require('../middleware/fetchApplicant');
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        var num;
        fs.readdir('uploads/', (err, files) => {
            num = files.length + 3421 + 1;
            cb(null, String(num) + file.originalname)
        });
    },
});
const upload = multer({ storage: storage });
const pUpload = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'signature', maxCount: 1 }]);
const nodemailer = require('nodemailer');


router.post('/registration', async (req, res) => {
    try {

        const existing_applicant = await Applicant.findOne({ $or: [{ mobile: req.body.mobile }, { email: req.body.email }] });

        if (existing_applicant) {
            return res.json({ "success": false, "message": "applicant already exists" });
        }
        else {

            const applicantCount = await Applicant.countDocuments({});
            const registrationId = parseInt(BASE_ID) + applicantCount;


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
            });

            const mailTransport = nodemailer.createTransport({
                host: "smtpout.asia.secureserver.net",
                secure: true,
                port: 465,
                auth: {
                    user: user,
                    pass: pass
                }
            });

            const mailOptions = {
                from: process.env.user,
                to: newApplicant.email,
                subject: `Login Credentials For Appointment Process`,
                html: `<h3>Below are the registration ID and password for AIM Faculty Appointment</h3>
                <h4>Registration ID: ${newApplicant.registrationId}</h4>
                <h4>Password: ${newApplicant.password}</h4>
                <br />
                <h4>Click on the below link to log in:</h4>
                <h4>http://aimguwahati-recruitment.in/</h4>`,
            };

            mailTransport.sendMail(mailOptions).then(() => {
                console.log('Email sent successfully');
            }).catch((err) => {
                console.log('Failed to send email');
                console.error(err);
            });


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
        if (registrationId === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            return res.json({ "success": true, "message": "admin verified" });
        }

        const existingUser = await Applicant.findOne({ registrationId, password });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "incorrect credentials" });
        }
        else {
            const authToken = jwt.sign(existingUser.id, SECRET_KEY);
            return res.json({ "success": true, "authToken": authToken });
        }

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }

})


router.put('/reset-password', async (req, res) => {

    try {
        const { firstname, middlename, lastname, dob } = req.body;

        const existingUser = await Applicant.findOne({ firstname, middlename, lastname, dob });

        if (!existingUser) {
            return res.status(400).json({ success: false, message: "incorrect credentials" });
        } else {
            if (existingUser.password_resets >= 4)
                return res.json({ success: false, "message": "password resets exhausted" });
            else {
                existingUser.password_resets += 1;
                existingUser.password = uuidv4().split('-')[0];
                await existingUser.save();
            }
        }

        const mailTransport = nodemailer.createTransport({
            host: "smtpout.asia.secureserver.net",
            secure: true,
            port: 465,
            auth: {
                user: user,
                pass: pass
            }
        });

        const mailOptions = {
            from: process.env.user,
            to: existingUser.email,
            subject: `Password Reset For Recruitment Process`,
            html: `<h3>Below are the registration ID and new password for AIM Faculty Appointment</h3>
            <h4>Registration ID: ${existingUser.registrationId}</h4>
            <h4>New Password: ${existingUser.password}</h4>            
            <br />
            <h4>Click on the below link to log in:</h4>
            <h4>http://aimguwahati-recruitment.in/</h4>`,
        };

        mailTransport.sendMail(mailOptions).then(() => {
            console.log('Email sent successfully');
        }).catch((err) => {
            console.log('Failed to send email');
            console.error(err);
        });


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
        return res.json({ "success": true, "applicant": applicant });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})


router.post('/save-form', fetchApplicant, async (req, res) => {
    try {
        const existing_application = await Application.findOne({ "applicant": req.id, "position": req.body.position });

        if (!existing_application) {
            const newApplication = await Application.create({
                applicant: req.id,
                position: req.body.position,
                general_information: { correspondence_address: req.body.correspondence_address, permanent_address: req.body.permanent_address },
                educational_qualification: req.body.educational_qualification,
                academic_experience: req.body.academic_experience,
                total_academic_experience: req.body.total_academic_experience,
                industry_experience: req.body.industry_experience,
                total_industry_experience: req.body.total_industry_experience,
                ug_teaching_experience: req.body.ug_teaching_experience,
                pg_teaching_experience: req.body.pg_teaching_experience,
                supervision_experience: req.body.supervision_experience,
                research_papers: req.body.research_papers,
                status: 'saved'
            });

            const applicant = await Applicant.findOne({ "id": req.id });
            applicant.positionsAppliedFor[applicant.positionsAppliedFor.length] = req.body.position;
            await applicant.save();

            return res.json({ "success": true, "message": "application successfully saved", "id": newApplication._id });
        } else if (existing_application) {
            existing_application.position = req.body.position;
            existing_application.general_information = { correspondence_address: req.body.correspondence_address, permanent_address: req.body.permanent_address };
            existing_application.educational_qualification = req.body.educational_qualification;
            existing_application.academic_experience = req.body.academic_experience;
            existing_application.total_academic_experience = req.body.total_academic_experience;
            existing_application.industry_experience = req.body.industry_experience;
            existing_application.total_industry_experience = req.body.total_industry_experience;
            existing_application.ug_teaching_experience = req.body.ug_teaching_experience;
            existing_application.pg_teaching_experience = req.body.pg_teaching_experience;
            existing_application.supervision_experience = req.body.supervision_experience;
            existing_application.research_papers = req.body.research_papers;
            await existing_application.save();

            return res.json({ "success": true, "message": "application successfully saved", "id": existing_application._id });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


router.get('/saved-form-data', fetchApplicant, async (req, res) => {
    try {
        const applicant = await Applicant.findOne({ "_id": req.id });
        const position = req.header('position');
        if (!position) {
            return res.json({ "success": true, "applicant": applicant });
        } else if (position) {
            const application = await Application.findOne({ "applicant": req.id, "position": position });
            return res.json({ "success": true, "applicant": applicant, "application": application });
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

router.post('/photo-upload', fetchApplicant, pUpload, async (req, res) => {

    try {
        const existingApplication = await Application.findOne({ applicant: req.id });

        if (!existingApplication) {
            return res.status(400).json({ success: false, message: "application does not exist" });
        } else {
            existingApplication.photos = { photo_path: 'uploads/' + req.files['photo'][0].filename, signature_path: 'uploads/' + req.files['signature'][0].filename };
            existingApplication.status = 'submitted';
            await existingApplication.save();

        }

        return res.json({ success: true, "message": "images successfully uploaded" });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }

})

router.get('/fetch-application-status', fetchApplicant, async (req, res) => {
    try {
        const applications = await Application.find({ applicant: req.id });
        if (applications) {
            return res.json({ "success": true, "applications": applications });
        }
        else
            return res.json({ "success": false });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

router.post('/fetch-application-data', fetchApplicant, async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.body.application_id });
        const applicant = await Applicant.findOne({ _id: req.id });
        return res.json({ "success": true, "applicant": applicant, "application": application });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;