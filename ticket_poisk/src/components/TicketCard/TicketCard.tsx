"use client";

import styles from "./TicketCard.module.css";
import Link from "next/link";
import Image from "next/image";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import Container from "@/components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { selectTicketAmount } from "@/store/features/cart/selector";
import { cartActions } from "@/store/features/cart";
import { useState } from "react";
import { createPortal } from "react-dom";
import ResetTicketsModal from "@/components/ResetTicketsModal/ResetTicketsModal";
import ResetButtonBlock from "@/components/ResetButtonBlock/ResetButtonBlock";

interface TicketProps {
  id: string;
  title: string;
  genre: string;
  posterUrl: string;
  showDeleteButton: boolean;
  showModal?: () => void;
}

export default function TicketCard(ticketProps: TicketProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state, ticketProps.id)
  );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(ticketProps.id));
  };
  const decrement = () => {
    if (ticketProps.showDeleteButton && ticketAmount === 1) showModal();
    else dispatch(cartActions.decrement(ticketProps.id));
  };

  const reset = () => {
    dispatch(cartActions.reset(ticketProps.id));
  };

  const showModal = () => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  return (
    <>
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
            <ResetButtonBlock showModal={showModal} />
          )}
        </div>
      </Container>
      {isModalOpen &&
        createPortal(
          <ResetTicketsModal showModal={showModal} reset={reset} />,
          document.body
        )}
    </>
  );
}
