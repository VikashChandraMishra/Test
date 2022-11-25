require("dotenv").config();
const connectToMongo = require('./db.js');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 5000;

connectToMongo();
app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser());
app.use(cors());
app.use(express.json()); 
app.use('/api/auth/admin', require('./routes/admin'));
app.use('/api/auth/applicant', require('./routes/applicant'));

app.listen(port, () => {
    console.log(`ASRLM API listening on port ${port}`); 
}); 