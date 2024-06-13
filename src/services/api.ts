const BASE_URL =  'https://projectshopapi.pythonanywhere.com/api/v1/';

export let urlImg = 'https://projectshopapi.pythonanywhere.com'

export async function fetcher(endpoint: string, options = {}) {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    return response.json();
}

