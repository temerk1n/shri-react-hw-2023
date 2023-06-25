import TicketCardList from "@/components/TicketCardList/TicketCardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import getAllMovies from "@/api/getAllMovies";
import Movie from "@/entities/Movie";
import Cinema from "@/entities/Cinema";
import getCinemas from "@/api/getCinemas";

export default async function Home() {
  let movies: Movie[] = await getAllMovies();
  const cinemas: Cinema[] = await getCinemas();

  return (
    <>
      <SearchBar cinemas={cinemas} />
      <TicketCardList movies={movies} />
    </>
  );
}
