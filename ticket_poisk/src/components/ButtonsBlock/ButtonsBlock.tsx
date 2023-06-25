import styles from "./ButtonsBlock.module.css";
import Button from "@/components/Button/Button";

interface ButtonsBlockProps {
  countOfTickets: number;
  increment: () => void;
  decrement: () => void;
}

export default function ButtonsBlock({
  countOfTickets,
  increment,
  decrement,
}: ButtonsBlockProps) {
  return (
    <div className={styles.buttonsBlock}>
      <Button iconUrl="/minus.svg" onClick={decrement} />
      {countOfTickets}
      <Button iconUrl="/plus.svg" onClick={increment} />
    </div>
  );
}
