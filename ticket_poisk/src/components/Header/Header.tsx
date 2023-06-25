import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">Билетопоиск</Link>
      <Link href="/cart">
        <Image src="/basket.svg" alt="cart" width="32" height="32" />
      </Link>
    </header>
  );
}
