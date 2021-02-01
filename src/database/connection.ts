import mongoose from 'mongoose';
require('dotenv').config()

let mongoConnection = 0;

function connectToMongo() {

    if (mongoConnection > 0) return;

    mongoose.connect(process.env.DATABASE_URL, {
        useFindAndModify: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    const db = mongoose.connection;
    mongoConnection = db.readyState;
    
}

export default connectToMongo;