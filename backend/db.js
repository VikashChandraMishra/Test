const mongoose = require('mongoose');
const {mongoURI} = process.env;

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Connection successful!');
    })
}

module.exports = connectToMongo;