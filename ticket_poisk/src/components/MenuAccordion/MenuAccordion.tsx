import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "./MenuAccordion.module.css"

interface MenuProps {
  children: ReactNode,
}

interface MenuItemProps {
  title: string,
  content?: string,
}

export function MenuAccordion({children}: MenuProps) {
  return (
    <div className={styles.content}>
      {children}
    </div>
  )
}

MenuAccordion.Item = function Item({title, content}: MenuItemProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  }

  return (
    <div className={styles.item}>
      <div className={styles.title}>
        <h2>{title}</h2>
        {
          content &&
          <button onClick={toggle} className={styles.button}>
            <Image src={isShowing ? "/arrowUp.svg" : "/arrowDown.svg"} alt="arrow" height="32" width="32"/>
          </button>
        }
      </div>
      {
        content &&
        <p style={{ display: isShowing ? "block" : "none" }}>{content}</p>
      }
    </div>
  )
}