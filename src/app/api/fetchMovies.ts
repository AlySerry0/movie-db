// src/api/fetchMovies.ts
export const fetchMovies = async (pages: number[] = [1]) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		}
	};

	const allMovies = [];
	for (const page of pages) {
		const response = await fetch(`http://localhost:5000/api/Movies/popular?pageNumber=${page}`, options);
		const data = await response.json();
		allMovies.push(...data.results);
	}
	return allMovies;
};