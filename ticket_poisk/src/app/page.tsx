import TicketCardList from "@/components/TicketCardList/TicketCardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import getAllMovies from "@/api/getAllMovies";
import Movie from "@/entities/Movie";

export default async function Home() {
  let movies: Movie[] = await getAllMovies();

  return (
    <>
      <SearchBar />
      <TicketCardList movies={movies} />
    </>
  );
}
