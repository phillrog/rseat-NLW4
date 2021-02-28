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
    const challenge = req.body;

    if (client.isConnected()) {
        await db
            .collection("challenges")
            .insertOne(challenge);

        return res.status(201).json({ sucesso: true })
    }

    return res.status(500).json({ error: 'client DB is not connected' })

}
