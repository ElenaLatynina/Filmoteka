import axios from "axios";

// Defolt:20 фильмов;
// page- число-отвечает за смену странцы в запросаж;
// В запросе нужно указывать параметры "query" страницу и "isSearch=true";


export async function fetchFilmData({ page = 1, query = '', isSearch = false }) {
	const BASE_URL = 'https://api.themoviedb.org/3/';
	const URL_PATH = !isSearch ? 'trending/movie/day' : 'search/movie';

	const searchParam = new URLSearchParams({ api_key: 'ad24807293275bef83ede161311e71e0', page, query });

	return await axios
		.get(`${BASE_URL}${URL_PATH}?${searchParam}`)
		.then(response => {
			if (response.status !== 200) return Promise.reject(`Error: ${response.message}`);
			return response.data;
		})
		.catch(err => {
			return Promise.reject(err => {
				window.alert('There was an error during last film data request');
				console.log(err);
			});
		});
}