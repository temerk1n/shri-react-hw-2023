import baseUrl from "@/api/baseUrl";
import Movie from "@/entities/Movie";

async function getAllMovies() {
  const res = await fetch(baseUrl + '/movies')

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res
    .json()
    .then((movies) => {
      return movies.map((movie: Movie) => new Movie(movie));
    });
}

export default getAllMovies;