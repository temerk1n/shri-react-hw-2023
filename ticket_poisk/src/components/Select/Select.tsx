import styles from "./Select.module.css";
import { ChangeEvent, useId, useState } from "react";
import SelectOption from "@/components/SelectOption/SelectOption";
import Image from "next/image";
import { createPortal } from "react-dom";
import classNames from "classnames";

export type SelectOption = {
  id: string;
  name: string;
};

export type SelectOptions = SelectOption[];

interface SelectProps {
  title: string;
  placeholder: string;
  name: string;
  options: SelectOptions;
  value: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Select({
  title,
  placeholder,
  name,
  options,
  value,
  onChangeValue,
}: SelectProps) {
  const selectId = useId();
  const [isShowing, setIsShowing] = useState(false);
  const cinemaName = options.find(
    (option: SelectOption) => option.id === value
  )?.name;

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  const selectOptions = (
    <div className={styles.content}>
      {options.map((option) => (
        <SelectOption
          key={option.id}
          name={name}
          value={option.id}
          label={option.name}
          onClick={onChangeValue}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div
        id={selectId}
        className={classNames(
          styles.select,
          isShowing ? styles.activeSelect : null
        )}
      >
        {value ? cinemaName : placeholder}
        <button onClick={toggle} className={styles.button}>
          <Image
            src={isShowing ? "/arrowUp.svg" : "/arrowDown.svg"}
            alt="arrow"
            height="20"
            width="20"
          />
        </button>
      </div>
      {isShowing && createPortal(selectOptions, document.body)}
    </div>
  );
}
