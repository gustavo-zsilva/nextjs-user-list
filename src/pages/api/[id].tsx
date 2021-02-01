import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

import connectToMongo from '../../database/connection';
import UserSchema from '../../database/models/UserModel';

connectToMongo();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const {
        query: { id },
        method
    } = req;

    let User;

    try {
        User = mongoose.model('User');
    } catch {
        User = mongoose.model('User', UserSchema)
    }

    switch (method) {
        case 'GET':
            try {
                const user = await User.findById(id);

                res.status(201).json({ success: true, data: user });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;

        case 'DELETE':
            try {
                const deletedUser = await User.findByIdAndDelete(id);

                res.status(201).json({ success: true, data: deletedUser });
            } catch (err) {
                res.status(400).json({ success: false });
            }
            break;
    }
}
