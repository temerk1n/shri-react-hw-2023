import styles from "./ButtonsBlock.module.css";
import Button from "@/components/Button/Button";

interface ButtonsBlockProps {
  countOfTickets: number;
  increment: () => void;
  decrement: () => void;
  minusDisabled: boolean;
  plusDisabled: boolean;
}

export default function ButtonsBlock({
  countOfTickets,
  increment,
  decrement,
  minusDisabled,
  plusDisabled,
}: ButtonsBlockProps) {
  return (
    <div className={styles.buttonsBlock}>
      <Button
        iconUrl="/minus.svg"
        onClick={decrement}
        disabled={minusDisabled}
      />
      {countOfTickets}
      <Button iconUrl="/plus.svg" onClick={increment} disabled={plusDisabled} />
    </div>
  );
}
