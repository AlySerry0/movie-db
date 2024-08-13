// src/api/fetchMovies.ts
export const fetchMovies = async (pages: number[] = [1]) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
		}
	};

	const allMovies = [];
	for (const page of pages) {
		const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
		const data = await response.json();
		allMovies.push(...data.results);
	}
	return allMovies;
};