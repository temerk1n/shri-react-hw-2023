import styles from "./button.module.css"
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps {
  text?: string,
  iconUrl?: string,
}

export default function Button({ text, iconUrl }: ButtonProps) {
  return (
    <button className={ classNames(styles.button, iconUrl ? styles.buttonWithIcon : styles.buttonWithText) }>
      {
        iconUrl ?
          <Image src={ iconUrl } alt="" width="9" height="9" /> :
          text
      }
    </button>
  )
}