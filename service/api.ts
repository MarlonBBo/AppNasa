const API_KEY = 'WBHz6cyqrVeTT1u2ifvSIvYBGOuUJ3EjF9wsYRWU';

async function api(url: string) {
    const response = await fetch(`${url}?api_key=${API_KEY}`);
    return response;
}

export default api;