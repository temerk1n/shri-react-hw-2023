"use client";

import Container from "@/components/Container/Container";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/store/features/cart/selector";

export default function Cart() {
  const cart = useSelector((state) => selectCartModule(state));

  return (
    <>
      <div className={styles.content}>
        <Container flexDirection="row" justifyContent="space-between">
          <h3>Итого билетов:</h3>
          <span>{cart.amount}</span>
        </Container>
      </div>
    </>
  );
}
