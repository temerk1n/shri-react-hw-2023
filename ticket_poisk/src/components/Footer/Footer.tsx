import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/qa">Вопросы-ответы</Link>
      <Link href="/about">О нас</Link>
    </footer>
  );
}
