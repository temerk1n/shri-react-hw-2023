"use client"
import styles from "./TicketCard.module.css"
import Button from "@/components/Button/Button";
import {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import Container from "@/components/Container/Container";

interface TicketProps {
  id: string
  title: string,
  genre: string,
  posterUrl: string,
  showDeleteButton: boolean,
}

export default function TicketCard(ticketProps: TicketProps) {
  const [countOfTickets, setCountOfTickets] = useState(0);

  return (
    <Container flexDirection="row" gap="1.5rem">
      <Image src={ ticketProps.posterUrl } alt='poster' width='100' height='120'/>
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
        <ButtonsBlock countOfTickets={countOfTickets} setCountOfTickets={setCountOfTickets}/>
        {
          ticketProps.showDeleteButton &&
          <div className={ styles.deleteButtonBlock }>
            <Button iconUrl="/close.svg" onClick={() => {}} isDeleteButton={ ticketProps.showDeleteButton }/>
          </div>
        }
      </div>
    </Container>
  )
}