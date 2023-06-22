"use client"
import { useEffect, useState } from "react";
import TicketCardList from "@/components/TicketCardList/TicketCardList";
import getAllMovies from "@/api/getAllMovies";
import SearchBar from "@/components/SearchBar/SearchBar";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then(r => setMovies(r));
  }, [])

  return (
    <Layout>
      <SearchBar />
      <TicketCardList movies={movies} />
    </Layout>
  );
}
