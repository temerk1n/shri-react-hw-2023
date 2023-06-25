import baseUrl from "@/api/baseUrl";
import Movie from "@/entities/Movie";

async function getMovieById(id: string) {
  const res = await fetch(baseUrl + "/movie?movieId=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((movie: Movie) => {
    return new Movie(movie);
  });
}

export default getMovieById;
