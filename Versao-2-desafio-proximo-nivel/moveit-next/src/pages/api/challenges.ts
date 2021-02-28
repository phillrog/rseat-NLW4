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

            if (user) {
                const response = await db
                    .collection("challenges")
                    .find({ user }).sort({ currentExperience: -1 }).toArray();

                const ret = response[0] || {};
                return res.status(200).json({
                    currentExperience: ret.currentExperience || 0,
                    challengesCompleted: ret.challengesCompleted || 0,
                    level: ret.level || 1
                })
            } else {
                const response: ChallengeData[] = await db
                    .collection("challenges")
                    .find()
                    .sort({ currentExperience: -1 }).toArray();

                if (response && response.length > 0)
                    return res.status(200).json({ response });
                else
                    return res.status(200).json([]);
            }
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
