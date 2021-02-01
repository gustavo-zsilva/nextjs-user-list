import mongoose, { Schema } from 'mongoose';

const User: Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        status: String,
        country: String,
        regionName: String,
        city: String,
        zip: String,
        lat: String,
        lon: String,
        isp: String,
        proxy: Boolean,
        query: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default User;