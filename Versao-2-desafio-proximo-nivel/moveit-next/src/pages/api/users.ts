import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../config/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { db, client } = await connectToDatabase();

    const email = req.query.id || '';

    if (client.isConnected()) {
        let users = await db
            .collection("users")
            .find({ email }).toArray();

        return res.status(200).json({ users })
    }

    return res.status(500).json({ error: 'client DB is not connected' })

}