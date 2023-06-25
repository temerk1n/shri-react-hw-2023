"use client";

import Container from "@/components/Container/Container";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/store/features/cart/selector";
import { useGetMoviesQuery } from "@/store/services/movieApi";
import TicketCardList from "@/components/TicketCardList/TicketCardList";
import Loading from "@/app/loading";
import Movie from "@/entities/Movie";

export default function Cart() {
  const cart = useSelector((state) => selectCartModule(state));
  const { data, isLoading } = useGetMoviesQuery();

  if (isLoading) return <Loading />;

  let movies: Movie[] = data.map((movie: Movie) => new Movie(movie));

  const tickets = movies.filter((movie: Movie) => {
    return movie.id in cart;
  });

  return (
    <>
      <div className={styles.content}>
        <TicketCardList movies={tickets} showDeleteButton />
        <Container flexDirection="row" justifyContent="space-between">
          <h3>Итого билетов:</h3>
          <span>{cart.amount}</span>
        </Container>
      </div>
    </>
  );
}
