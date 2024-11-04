import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import fs from "fs"

export const GET: RequestHandler = async () => {

    const content = fs.readFileSync("./static/Hero_data.json", "utf-8")

    return json(JSON.parse(content))

};