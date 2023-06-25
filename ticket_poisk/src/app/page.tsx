import TicketCardList from "@/components/TicketCardList/TicketCardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import getAllMovies from "@/api/getAllMovies";
import Movie from "@/entities/Movie";
import Cinema from "@/entities/Cinema";
import getCinemas from "@/api/getCinemas";
import styles from "./mainPage.module.css";

export default async function Home() {
  let movies: Movie[] = await getAllMovies();
  const cinemas: Cinema[] = await getCinemas();

  return (
    <>
      <SearchBar cinemas={cinemas} />
      <div className={styles.list}>
        <TicketCardList movies={movies} />
      </div>
    </>
  );
}
