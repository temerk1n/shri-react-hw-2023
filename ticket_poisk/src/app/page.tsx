"use client";

import TicketCardList from "@/components/TicketCardList/TicketCardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./mainPage.module.css";
import {
  useGetCinemasQuery,
  useGetMoviesQuery,
} from "@/store/services/movieApi";
import Loading from "@/app/loading";
import { useState } from "react";
import Movie from "@/entities/Movie";
import Cinema from "@/entities/Cinema";

export default function Home() {
  const [title, setTitle] = useState("");
  // const [genre, setGenre] = useState("");
  // const [cinema, setCinema] = useState("");

  const moviesResponse = useGetMoviesQuery();
  const cinemasResponse = useGetCinemasQuery();

  if (moviesResponse.isLoading || cinemasResponse.isLoading) return <Loading />;

  let movies: Movie[] = moviesResponse.data.map(
    (movie: Movie) => new Movie(movie)
  );
  const cinemas: Cinema[] = cinemasResponse.data;

  // if (genre) {
  //   movies = movies.filter((movie: Movie) => movie.genre === genre);
  // }
  if (title) {
    movies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <>
      <SearchBar
        cinemas={cinemas}
        title={title}
        onChangeTitle={(e) => setTitle(e.target.value)}
      />
      <div className={styles.list}>
        <TicketCardList movies={movies} />
      </div>
    </>
  );
}
