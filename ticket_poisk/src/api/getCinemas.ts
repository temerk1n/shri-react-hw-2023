import baseUrl from "@/api/baseUrl";
import Cinema from "@/entities/Cinema";

async function getCinemas() {
  const res = await fetch(baseUrl + "/cinemas");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json().then((cinemas) => {
    return cinemas.map((cinema: Cinema) => new Cinema(cinema));
  });
}

export default getCinemas;
