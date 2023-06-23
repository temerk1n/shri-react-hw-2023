import baseUrl from "@/api/baseUrl";

async function getMovieById(id: string) {
  const res = await fetch(baseUrl + "/movie?movieId=" + id);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getMovieById;
