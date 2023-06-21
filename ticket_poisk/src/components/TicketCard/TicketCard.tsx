import styles from "./TicketCard.module.css"
import Button from "@/components/Button/Button";
import {useState} from "react";

interface MovieProps {
  title: string,
  genre: string,
  posterUrl: string,
}

export default function TicketCard(movie: MovieProps) {
  const [countOfTickets, setCountOfTickets] = useState(0);

  return (
    <article className={ styles.container }>
      <img src={ movie.posterUrl } alt='poster' width='100' height='120'/>
      <div className={ styles.info }>
        <div className={ styles.description }>
          <div className={ styles.title }>
            { movie.title }
          </div>
          <div className={ styles.genre }>
            { movie.genre }
          </div>
        </div>
        <div className={ styles.buttonsBlock }>
          <Button text="Нет" />
          { countOfTickets }
          <Button iconUrl="/plus.svg"/>
        </div>
      </div>
    </article>
  )
}