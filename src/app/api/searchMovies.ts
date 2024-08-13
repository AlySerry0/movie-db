// src/api/searchMovies.ts
export const searchMovies = async (query: string) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2ZhODI4NmM2ZWZiMDY3NTVmNTI3M2MyN2NkN2UxOSIsIm5iZiI6MTcyMzQ0OTUzMC4xMzI0NzQsInN1YiI6IjY2YjhhNWFhYjk5M2E0YWM3YWY2ZWQzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cNVMcpLAOk3XkalSxnPMx4UUvdy85NnbQO9C72yAsqA'
    }
  };

  const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US`, options);
  const data = await response.json();
  return data.results;
};