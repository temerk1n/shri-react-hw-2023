import baseUrl from "@/api/baseUrl";

async function getMoviesByCinemaId(id: string) {
  const res = await fetch(baseUrl + "/movies?cinemaId=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getMoviesByCinemaId;
