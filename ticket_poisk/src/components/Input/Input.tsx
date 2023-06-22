import styles from './Input.module.css'
import { ChangeEvent, useId } from "react";

interface InputProps {
  label?: string,
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default function Input({label = '', type, placeholder, value, onChange}: InputProps) {
  const inputId = useId();

  const hasLabel = label.length > 0;

  return (
    <div className={styles.container}>
      {hasLabel && <label htmlFor={inputId}>{label}</label>}
      <input className={styles.input} type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}