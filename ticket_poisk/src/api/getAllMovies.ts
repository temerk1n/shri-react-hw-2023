import baseUrl from "@/api/baseUrl";
import Movie from "@/entities/Movie";
import translateGenre from "@/utils/translateGenre";

async function getAllMovies() {
  const res = await fetch(baseUrl + "/movies");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((movies) => {
    return movies.map((movie: Movie) => translateGenre(movie));
  });
}

export default getAllMovies;
