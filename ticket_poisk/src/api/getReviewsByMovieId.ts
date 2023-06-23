import baseUrl from "@/api/baseUrl";

async function getReviewsByMovieId(id: string) {
  const res = await fetch(baseUrl + '/reviews?movieId=' + id)

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default getReviewsByMovieId;
