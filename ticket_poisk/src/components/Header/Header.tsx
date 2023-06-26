"use client";

import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectCartModule } from "@/store/features/cart/selector";
import Button from "@/components/Button/Button";

export default function Header() {
  const cart = useSelector((state) => selectCartModule(state));
  return (
    <header className={styles.header}>
      <Link href="/">Билетопоиск</Link>
      <Link href="/cart" className={styles.basket}>
        <Button text={cart.amount} variant="primary" basket={true} />
        <Image src="/basket.svg" alt="cart" width="32" height="32" />
      </Link>
    </header>
  );
}
