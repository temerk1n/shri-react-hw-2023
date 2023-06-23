import baseUrl from "@/api/baseUrl";

async function getCinemas() {
  const res = await fetch(baseUrl + '/cinemas')

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default getCinemas;