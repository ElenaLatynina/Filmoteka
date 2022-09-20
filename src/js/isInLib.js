import { fetchDataFromStorage } from './dataStorage';

export function isInLib({ id, storageKey }) {
	const data = fetchDataFromStorage(storageKey);
	const ID = Number(id);

	if (data) {
		for (let i = 0; i < data?.length; i += 1) {
			if (data[i].id === ID) return data[i];
		}
	}

	return;
}
