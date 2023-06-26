import baseUrl from "@/api/baseUrl";
import Movie from "@/entities/Movie";
import translateGenre from "@/utils/translateGenre";

async function getMoviesByCinemaId(id: string) {
  const res = await fetch(baseUrl + "/movies?cinemaId=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((movies) => {
    return movies.map((movie: Movie) => translateGenre(movie));
  });
}

export default getMoviesByCinemaId;
