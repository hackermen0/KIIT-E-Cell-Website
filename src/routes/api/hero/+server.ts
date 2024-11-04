import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import fs from 'fs/promises';

export const GET: RequestHandler = async () => {

    try {

        const content = await fs.readFile("./static/Hero_data.json", "utf-8")
    
        const data = JSON.parse(content)
    
        console.log(data)
    
        return json(data)
    } catch(error){
        console.error('Error reading file:', error);
        return json({ error: 'File not found' }, { status: 500 });
    }
};

