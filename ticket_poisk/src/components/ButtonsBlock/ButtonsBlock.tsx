import styles from "./ButtonsBlock.module.css";
import Button from "@/components/Button/Button";
import { Dispatch, SetStateAction } from "react";

interface ButtonsBlockProps {
  countOfTickets: number,
  setCountOfTickets: Dispatch<SetStateAction<number>>,
}

export default function ButtonsBlock({ countOfTickets, setCountOfTickets }: ButtonsBlockProps) {
  const handlePlusClick = () => {
    setCountOfTickets(count => {
      if (count === 30) return count;
      return count + 1;
    });
  }

  const handleMinusClick = () => {
    setCountOfTickets(count => {
      if (count === 0) return count;
      return count - 1;
    });
  }

  return (
    <div className={ styles.buttonsBlock }>
      <Button iconUrl="/minus.svg" onClick={handleMinusClick} />
      { countOfTickets }
      <Button iconUrl="/plus.svg" onClick={handlePlusClick} />
    </div>
  )
}