"use client";

import TicketCardList from "@/components/TicketCardList/TicketCardList";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from "./mainPage.module.css";
import {
  useGetCinemasQuery,
  useGetMoviesByCinemaIdQuery,
  useGetMoviesQuery,
} from "@/store/services/movieApi";
import Loading from "@/app/loading";
import { useState } from "react";
import Movie from "@/entities/Movie";
import Cinema from "@/entities/Cinema";

export default function Home() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [cinema, setCinema] = useState("");

  const moviesResponse = useGetMoviesQuery(null);
  const cinemasResponse = useGetCinemasQuery(null);
  const moviesByCinemaResponse = useGetMoviesByCinemaIdQuery(cinema);
  if (
    moviesResponse.isLoading ||
    cinemasResponse.isLoading ||
    moviesByCinemaResponse.isLoading
  )
    return <Loading />;

  let movies: Movie[] = moviesResponse.data;
  const genres = new Set<string>();
  movies.forEach((movie) => {
    genres.add(movie.genre);
  });
  const cinemas: Cinema[] = cinemasResponse.data;

  // filter
  if (cinema) {
    movies = moviesByCinemaResponse.data;
  }
  if (genre) {
    movies = movies.filter((movie: Movie) => movie.genre === genre);
  }
  if (title) {
    movies = movies.filter((movie: Movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  return (
    <>
      <SearchBar
        cinemas={cinemas}
        genres={genres}
        title={title}
        onChangeTitle={(e) => {
          e.preventDefault();
          setTitle(e.target.value);
        }}
        genre={genre}
        onChangeGenre={(e) => {
          e.preventDefault();
          setGenre(e.target.value);
        }}
        cinema={cinema}
        onChangeCinema={(e) => {
          e.preventDefault();
          setCinema(e.target.value);
        }}
      />
      <div className={styles.list}>
        <TicketCardList movies={movies} />
      </div>
    </>
  );
}
