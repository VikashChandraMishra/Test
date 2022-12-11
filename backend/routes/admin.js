const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant')
const Application = require('../models/Application');


router.get('/fetch-applications', async (req, res) => {
    try {
        const applications = await Application.find({$or: [{'status': 'submitted'}, {'status': 'approved'}, {'status': 'rejected'}]}).sort({ uploaded: -1 });
        res.json({ "success": true, applications });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

router.post('/send-application-data', async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.body.application_id });
        const applicant = await Applicant.findOne({ _id: application.applicant });
        res.json({ "success": true, "applicant": applicant, "application": application });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


router.post('/approve-application', async (req, res) => {
    try {
        const application = await Application.findOne({_id: req.body.application_id});
        application.status = 'approved';
        await application.save();
        res.json({ "success": true, "message": "application approved"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

router.post('/reject-application', async (req, res) => {
    try {
        const application = await Application.findOne({_id: req.body.application_id});
        application.status = 'rejected';
        await application.save();
        res.json({ "success": true, "message": "application rejected"});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;