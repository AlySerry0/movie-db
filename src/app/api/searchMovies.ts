// src/api/searchMovies.ts
export const searchMovies = async (query: string) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		}
	};

	const response = await fetch(`http://localhost:5000/api/Movies/search?query=${encodeURIComponent(query)}`, options);
	const data = await response.json();
	return data.results;
};