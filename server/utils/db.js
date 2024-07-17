const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {

    } catch (error) {
        console.log('database connection error: ', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;