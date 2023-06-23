import Image from "next/image";
import { ReactNode, useState } from "react";
import styles from "./MenuAccordion.module.css";
import Container from "@/components/Container/Container";

interface MenuProps {
  children: ReactNode;
}

interface MenuItemProps {
  title: string;
  content?: string;
}

function MenuAccordion({ children }: MenuProps) {
  return <div className={styles.content}>{children}</div>;
}

MenuAccordion.Item = function Item({ title, content }: MenuItemProps) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <Container flexDirection="column" gap="1rem">
      <div className={styles.title}>
        {content ? (
          <>
            <h2>{title}</h2>
            <button onClick={toggle} className={styles.button}>
              <Image
                src={isShowing ? "/arrowUp.svg" : "/arrowDown.svg"}
                alt="arrow"
                height="32"
                width="32"
              />
            </button>
          </>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      {content && (
        <p style={{ display: isShowing ? "block" : "none" }}>{content}</p>
      )}
    </Container>
  );
};

export default MenuAccordion;
