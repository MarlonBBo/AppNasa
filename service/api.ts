const API_KEY = 'WBHz6cyqrVeTT1u2ifvSIvYBGOuUJ3EjF9wsYRWU';

async function apiAPOD(url: string) {
    const response = await fetch(`${url}?api_key=${API_KEY}`);
    return response;
}

async function apiMeteoro(url: string) {
    const response = await fetch(`${url}&api_key=${API_KEY}`);
    return response;
}

export { apiAPOD, apiMeteoro };