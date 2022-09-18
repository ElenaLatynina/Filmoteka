export function saveDataToStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

export function fetchDataFromStorage(key) {
	const results = localStorage.getItem(key);

	if (results) return JSON.parse(results);

	return;
}