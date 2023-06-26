import { useId } from "react";
import styles from "./SelectOption.module.css";

interface SelectOptionProps {
  label: string;
  name: string;
  value: string;
  onClick: (e: any) => void;
}

export default function SelectOption({
  label,
  name,
  value,
  onClick,
}: SelectOptionProps) {
  const id = useId();
  return (
    <>
      <input
        id={id}
        className={styles.input}
        value={value}
        type="radio"
        name={name}
        onClick={onClick}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </>
  );
}
