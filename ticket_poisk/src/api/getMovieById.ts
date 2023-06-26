import baseUrl from "@/api/baseUrl";
import Movie from "@/entities/Movie";
import translateGenre from "@/utils/translateGenre";

async function getMovieById(id: string) {
  const res = await fetch(baseUrl + "/movie?movieId=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((movie: Movie) => translateGenre(movie));
}

export default getMovieById;
