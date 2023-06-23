import baseUrl from "@/api/baseUrl";

async function getAllReviews() {
  const res = await fetch(baseUrl + "/reviews");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default getAllReviews;
