import styles from "./Select.module.css";
import { useId } from "react";

export type SelectOptions = [string, string][];

interface SelectProps {
  label?: string;
  defaultOption: string;
  options: SelectOptions;
}

export default function Select({
  label = "",
  defaultOption,
  options,
}: SelectProps) {
  const selectId = useId();

  const hasLabel = label.length > 0;

  const selectOptions = options.map((option) => (
    <option key={option[0]} value={option[0]}>
      {option[1]}
    </option>
  ));

  return (
    <div className={styles.container}>
      {hasLabel && <label htmlFor={selectId}>{label}</label>}
      <select id={selectId} className={styles.select}>
        <option value="">{defaultOption}</option>
        {selectOptions}
      </select>
    </div>
  );
}
