"use client";

import Movie from "@/entities/Movie";
import Container from "@/components/Container/Container";
import Image from "next/image";
import styles from "./MovieCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartModule,
  selectTicketAmount,
} from "@/store/features/cart/selector";
import { cartActions } from "@/store/features/cart";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import translateGenre from "@/utils/translateGenre";

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const cart = useSelector((state) => selectCartModule(state));
  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state, movie.id)
  );
  const dispatch = useDispatch();

  const minusDisabled = ticketAmount === 0 || cart.amount === 0;
  const plusDisabled = cart.amount === 30;

  const increment = () => {
    dispatch(cartActions.increment(movie.id));
  };
  const decrement = () => {
    dispatch(cartActions.decrement(movie.id));
  };

  return (
    <Container flexDirection="row" gap="2rem">
      <Image src={movie.posterUrl} alt="poster" width="400" height="500" />
      <div className={styles.movieInfo}>
        <div className={styles.generalInfo}>
          <div className={styles.title}>
            <h1>{movie.title}</h1>
            <ButtonsBlock
              countOfTickets={ticketAmount}
              increment={increment}
              decrement={decrement}
              plusDisabled={plusDisabled}
              minusDisabled={minusDisabled}
            />
          </div>
          <div className={styles.encyclopedicTable}>
            <p>
              <strong>Жанр: </strong>
              {translateGenre(movie.genre)}
            </p>
            <p>
              <strong>Год выпуска: </strong>
              {movie.releaseYear}
            </p>
            <p>
              <strong>Рейтинг: </strong>
              {movie.rating}
            </p>
            <p>
              <strong>Режиссер: </strong>
              {movie.director}
            </p>
          </div>
        </div>
        <div className={styles.description}>
          <h2>Описание</h2>
          <p>{movie.description}</p>
        </div>
      </div>
    </Container>
  );
}
