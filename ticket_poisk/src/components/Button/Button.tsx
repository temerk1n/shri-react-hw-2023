import styles from "./button.module.css"
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps {
  text?: string,
  iconUrl?: string,
  onClick: () => void,
}

export default function Button({ text, iconUrl, onClick }: ButtonProps) {
  return (
    <button className={ classNames(styles.button, iconUrl ? styles.buttonWithIcon : styles.buttonWithText) } onClick={ onClick } >
      {
        iconUrl ?
          <Image src={ iconUrl } alt="" width="9" height="9" /> :
          text
      }
    </button>
  )
}