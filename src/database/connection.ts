import mongoose from 'mongoose';
require('dotenv').config()

let cachedDb = null;

function connectToMongo(uri: string) {
    if (cachedDb) {
        return cachedDb;
    };

    mongoose.connect(uri, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const db = mongoose.connection;
    cachedDb = db;
    
    return db;
}

export default connectToMongo;