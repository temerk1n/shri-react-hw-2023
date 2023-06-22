import styles from "./TicketCard.module.css"
import Button from "@/components/Button/Button";
import {useState} from "react";

interface TicketProps {
  title: string,
  genre: string,
  posterUrl: string,
}

export default function TicketCard(movie: TicketProps) {
  const [countOfTickets, setCountOfTickets] = useState(0);

  const handlePlusClick = () => {
    setCountOfTickets(count => count + 1);
  }

  const handleMinusClick = () => {
    setCountOfTickets(count => count - 1);
  }

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
          <Button iconUrl="/minus.svg" onClick={handleMinusClick} />
          { countOfTickets }
          <Button iconUrl="/plus.svg" onClick={handlePlusClick} />
        </div>
      </div>
    </article>
  )
}