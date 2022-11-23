require("dotenv").config();
const connectToMongo = require('./db.js');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 5000;


connectToMongo();
app.use(cors());
app.use(express.json()); 
app.use('/api/auth', require('./routes/auth'));


app.listen(port, () => {
    console.log(`ASRLM API listening on port ${port}`); 
}); 