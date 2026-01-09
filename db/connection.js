const mongoose = require('mongoose');

let isConnected = false;
const connectDB = async () => {
    if (isConnected) return;
    
    try {
        const uri = process.env.MONGO_NEW_URI;
        console.log('Connecting to MongoDB Atlas...');
        
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000, 
            socketTimeoutMS: 45000
        });        
        isConnected = true;
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        throw error
    }
};

module.exports = connectDB;