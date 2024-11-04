import type { PageServerLoad } from "./$types";

export const load : PageServerLoad = async({}) => {

    const baseURL = import.meta.env.VITE_BASE_API_URL

    const response = await fetch(`${baseURL}/hero`, {
        method : "GET"
    })

    const data = await response.json()

    return data
}