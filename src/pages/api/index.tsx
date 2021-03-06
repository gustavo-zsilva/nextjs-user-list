import { NowRequest, NowResponse } from '@vercel/node';
import mongoose from 'mongoose';

import connectToMongo from '../../database/connection';
import UserSchema from '../../database/models/UserModel';


export default async (req: NowRequest, res: NowResponse) => {

    connectToMongo(process.env.DATABASE_URL);

    const { method, body } = req;

    let User;

    try {
        User = mongoose.model('User');
    } catch (err) {
        User = mongoose.model('User', UserSchema);
    }

    switch (method) {
        case 'GET':
            try {
                const users = await User.find();
                res.status(201).json({ success: true, data: users })
            } catch (err) {
                res.status(500).json({ success: false })
            }
            break;
        
        case 'POST':
            try {
                const newUser = await new User(body);

                newUser.save();

                res.status(201).json({ success: true, data: newUser })
            } catch (err) {
                res.status(500).json({ success: false })
            }
            break;

        case 'DELETE':
            try {
                await User.deleteMany();

                res.status(201).json({ success: true, data: {} })
            } catch (err) {
                res.status(500).json({ success: false })
            }
    }
}
