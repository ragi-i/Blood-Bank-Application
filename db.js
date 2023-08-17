const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta);
    }
    catch(error){
        console.log(`MongoDB Database Error ${error}`.bgRed)
    }
};

module.exports = connectDB;