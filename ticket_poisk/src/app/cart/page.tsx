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
  const { data, isLoading } = useGetMoviesQuery(null);

  if (isLoading) return <Loading />;

  const tickets = data.filter((movie: Movie) => {
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
