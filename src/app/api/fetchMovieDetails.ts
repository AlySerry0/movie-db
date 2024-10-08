// src/api/fetchMovieDetails.ts
export const fetchMovieDetails = async (id: number) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
		}
	};

	const response = await fetch(`http://localhost:5000/api/Movies/Details/${id}`, options);
	console.log(response);
	return await response.json();
};