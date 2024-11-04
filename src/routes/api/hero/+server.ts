import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import type { HeroData } from '$types/HeroData';
import { connectToDatabase } from '$lib/db.js';

export const GET: RequestHandler = async () => {

    const db = await connectToDatabase();
    const collection = db.collection<HeroData>('heroData')

    const heroData = await collection.findOne({_id : "6728a54236be5edb93bcc047"})

    console.log(heroData)

    return json(heroData)    


};

