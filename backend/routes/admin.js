const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant')
const Application = require('../models/Application');


router.get('/fetch-applications', async (req, res) => {
    try {
        const applicants = await Applicant.find();
        const applications = await Application.find({ $or: [{ 'status': 'submitted' }, { 'status': 'approved' }, { 'status': 'rejected' }] }).sort({ uploaded: -1 });
        return res.json({ "success": true, applications, applicants });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

router.post('/send-application-data', async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.body.application_id });
        const applicant = await Applicant.findOne({ _id: application.applicant });
        return res.json({ "success": true, "applicant": applicant, "application": application });
    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})


router.post('/approve-application', async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.body.application_id });
        application.status = 'approved';
        await application.save();
        return res.json({ "success": true, "message": "application approved" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

router.post('/reject-application', async (req, res) => {
    try {
        const application = await Application.findOne({ _id: req.body.application_id });
        application.status = 'rejected';
        await application.save();
        return res.json({ "success": true, "message": "application rejected" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error!");
    }
})

module.exports = router;