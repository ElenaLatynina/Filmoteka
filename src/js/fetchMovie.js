export function fetchMovie(name) {
    const BASE_URL = 'https://api.themoviedb.org/3/movie';
    const API_KEY = '07365d3730901c9189566ffe38d9d5bb'
    const choice = 'query=poster_path,riginal_title,genres.name,production_countries.release_date';
    return fetch(`${BASE_URL}?api_key=${API_KEY}&${choice}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
}

