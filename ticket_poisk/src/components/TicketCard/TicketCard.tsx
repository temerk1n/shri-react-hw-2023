import styles from "./TicketCard.module.css"
import Button from "@/components/Button/Button";
import {useState} from "react";
import Link from "next/link";

interface TicketProps {
  id: string
  title: string,
  genre: string,
  posterUrl: string,
}

export default function TicketCard(ticketProps: TicketProps) {
  const [countOfTickets, setCountOfTickets] = useState(0);

  const handlePlusClick = () => {
    setCountOfTickets(count => {
      if (count === 30) return count;
      return count + 1;
    });
  }

  const handleMinusClick = () => {
    setCountOfTickets(count => {
      if (count === 0) return count;
      return count - 1;
    });
  }

  return (
    <article className={ styles.container }>
      <img src={ ticketProps.posterUrl } alt='poster' width='100' height='120'/>
      <div className={ styles.info }>
        <div className={ styles.description }>
          <div className={ styles.title }>
            <Link href={'/movie/' + ticketProps.id}>
              { ticketProps.title }
            </Link>
          </div>
          <div className={ styles.genre }>
            { ticketProps.genre }
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