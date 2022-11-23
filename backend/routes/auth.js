const express = require('express');
const router = express.Router();

router.post('/admin-login', (req, res) => {
    const { ADMIN_USERNAME, ADMIN_PASSWORD } = process.env;
    if (req.body.username === ADMIN_USERNAME && req.body.password === ADMIN_PASSWORD)
        res.json({"success": true, "message": "admin verified"})
    else
        res.json({"success": false, "message": "admin not verified"})
})

module.exports = router;