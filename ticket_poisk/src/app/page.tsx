"use client"
import { useEffect, useState } from "react";
import TicketCardList from "@/components/TicketCardList/TicketCardList";
import getAllMovies from "@/api/getAllMovies";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then(r => setMovies(r));
  }, [])

  return (
    <>
      <SearchBar />
      <TicketCardList movies={movies} />
    </>
  );
}
