import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../../config/mongodb';

interface ChallengeData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    user: any;
}

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db, client } = await connectToDatabase();

    if (!client.isConnected()) {
        return res.status(500).json({ error: 'client DB is not connected' });
    }

    switch (req.method) {
        case 'GET': {

            const user = req.query.user;
            const response = await db
                .collection("challenges")
                .findOne({ user });
            return res.status(200).json({
                currentExperience: response.currentExperience,
                challengesCompleted: response.challengesCompleted,
                level: response.level
            })
        }
        case 'POST': {
            const challenge = req.body;

            await db
                .collection("challenges")
                .insertOne(challenge);

            return res.status(201).json({ sucesso: true });
        }
        default:
            res.status(405).end()
            break;
    }
}
