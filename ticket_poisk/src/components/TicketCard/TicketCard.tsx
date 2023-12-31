"use client";

import styles from "./TicketCard.module.css";
import Link from "next/link";
import Image from "next/image";
import ButtonsBlock from "@/components/ButtonsBlock/ButtonsBlock";
import Container from "@/components/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartModule,
  selectTicketAmount,
} from "@/store/features/cart/selector";
import { cartActions } from "@/store/features/cart";
import { useState } from "react";
import { createPortal } from "react-dom";
import ResetTicketsModal from "@/components/ResetTicketsModal/ResetTicketsModal";
import ResetButtonBlock from "@/components/ResetButtonBlock/ResetButtonBlock";
import translateGenre from "@/utils/translateGenre";

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
  const cart = useSelector((state) => selectCartModule(state));
  const dispatch = useDispatch();

  const minusDisabled = ticketAmount === 0 || cart.amount === 0;
  const plusDisabled = cart.amount === 30;

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
          style={{ borderRadius: "8px" }}
        />
        <div className={styles.info}>
          <div className={styles.description}>
            <div className={styles.title}>
              <Link href={"/movie/" + ticketProps.id}>{ticketProps.title}</Link>
            </div>
            <div className={styles.genre}>
              {translateGenre(ticketProps.genre)}
            </div>
          </div>
          <ButtonsBlock
            countOfTickets={ticketAmount}
            increment={increment}
            decrement={decrement}
            plusDisabled={plusDisabled}
            minusDisabled={minusDisabled}
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
