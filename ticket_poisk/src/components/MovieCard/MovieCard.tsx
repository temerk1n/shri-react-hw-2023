import Movie from "@/entities/Movie";
import Container from "@/components/Container/Container";
import Image from "next/image";
import styles from "./MovieCard.module.css"
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie | null;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [countOfTickets, setCountOfTickets] = useState(0);

  return (
    <Container flexDirection="row" gap="2rem">
      <Image src={ movie?.posterUrl || "" } alt='poster' width='400' height='500'/>
      <div className={ styles.movieInfo }>
        <div className={ styles.generalInfo }>
          <div className={ styles.title }>
            <h1>{movie?.title}</h1>
            <ButtonsBlock countOfTickets={countOfTickets} setCountOfTickets={setCountOfTickets} />
          </div>
          <div className={ styles.encyclopedicTable }>
            <p><strong>Жанр: </strong>{ movie?.genre }</p>
            <p><strong>Год выпуска: </strong>{ movie?.releaseYear }</p>
            <p><strong>Рейтинг: </strong>{ movie?.rating }</p>
            <p><strong>Режиссер: </strong>{ movie?.director }</p>
          </div>
        </div>
        <div className={ styles.description }>
          <h2>Описание</h2>
          <p>{ movie?.description }</p>
        </div>
      </div>
    </Container>
  )
}