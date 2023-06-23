import styles from "./Container.module.css";
import { ReactNode } from "react";
import { Property } from "csstype";
import FlexDirection = Property.FlexDirection;

interface ContainerProps {
  children: ReactNode;
  flexDirection: FlexDirection;
  gap?: string;
  width?: string;
  justifyContent?: string;
}

export default function Container({
  children,
  flexDirection,
  gap,
  width,
  justifyContent,
}: ContainerProps) {
  return (
    <article
      className={styles.container}
      style={{
        gap: gap,
        flexDirection: flexDirection,
        width: width,
        justifyContent: justifyContent,
      }}
    >
      {children}
    </article>
  );
}
