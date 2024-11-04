import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = async({}) => {

    const baseURL = import.meta.env.VITE_BASE_API_URL

    console.log(baseURL)

    const response = await fetch(`${baseURL}/hero`, {
        method : "GET"
    })

    if (!response.ok) {
        throw error(response.status, "Error in fetching data")
    }

    const data = await response.json()

    return data
}