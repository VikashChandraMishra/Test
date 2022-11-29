const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

router.post('/login', (req, res) => {
    const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;
    if (req.body.username === ADMIN_USERNAME && req.body.password === ADMIN_PASSWORD) {
        res.cookie('username', 'admin')
        res.json({ "success": true, "message": "admin verified" })
    }
    else
        res.json({ "success": false, "message": "admin not verified" })
})

router.get('/fetch-applicant-list', async (req, res) => {
    try {
        const applicants = await Applicant.find();
        res.json({"success": true, applicants});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }
})


module.exports = router;