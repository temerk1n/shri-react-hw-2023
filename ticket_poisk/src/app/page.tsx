"use client"
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import TicketCardList from "@/components/TicketCardList/TicketCardList";
import getAllMovies from "@/api/getAllMovies";
import SearchBar from "@/components/SearchBar/SearchBar";
import styles from './page.module.css'

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then(r => setMovies(r));
  }, [])

  return (
    <>
      <Header />
      <div className={styles.content}>
        <SearchBar />
        <TicketCardList movies={movies} />
      </div>
      <Footer />
    </>
  );
}
