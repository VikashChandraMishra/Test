require("dotenv").config();
const connectToMongo = require('./db.js');
const cors = require('cors');
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const port = 5000;

connectToMongo();
app.use(bodyParser.urlencoded({extended : true}))
app.use(cors());
app.use('/uploads', express.static('uploads'));
app.use(express.json()); 
app.use('/api/admin', require('./routes/admin'));
app.use('/api/applicant', require('./routes/applicant'));

app.listen(port, () => {
    console.log(`API listening on port ${port}`); 
}); 