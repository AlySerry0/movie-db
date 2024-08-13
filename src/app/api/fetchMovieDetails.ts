// src/api/fetchMovieDetails.ts
export const fetchMovieDetails = async (id: number) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
  return await response.json();
};