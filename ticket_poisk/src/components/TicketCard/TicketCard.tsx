"use client";

import styles from "./TicketCard.module.css";
import Button from "@/components/Button/Button";
import Link from "next/link";
import Image from "next/image";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import Container from "@/components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectTicketAmount } from "@/store/features/cart/selector";
import { cartActions } from "@/store/features/cart";

interface TicketProps {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  showDeleteButton: boolean;
}

export default function TicketCard(ticketProps: TicketProps) {
  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state, ticketProps.id)
  );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(ticketProps.id));
  };
  const decrement = () => {
    dispatch(cartActions.decrement(ticketProps.id));
  };

  return (
    <Container flexDirection="row" gap="1.5rem">
      <Image
        src={ticketProps.posterUrl}
        alt="poster"
        width="100"
        height="120"
      />
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>
            <Link href={"/movie/" + ticketProps.id}>{ticketProps.title}</Link>
          </div>
          <div className={styles.genre}>{ticketProps.genre}</div>
        </div>
        <ButtonsBlock
          countOfTickets={ticketAmount}
          increment={increment}
          decrement={decrement}
        />
        {ticketProps.showDeleteButton && (
          <div className={styles.deleteButtonBlock}>
            <Button
              iconUrl="/close.svg"
              onClick={() => {}}
              isDeleteButton={ticketProps.showDeleteButton}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
