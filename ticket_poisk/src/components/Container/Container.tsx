import styles from "./Container.module.css"
import { ReactNode } from "react";
import classNames from "classnames";
import { Property } from "csstype";
import FlexDirection = Property.FlexDirection;

interface ContainerProps {
  children: ReactNode,
  flexDirection: FlexDirection,
  gap: string,
  width?: string,
}

export default function Container({ children, flexDirection, gap, width }: ContainerProps) {
  return (
    <article className={ classNames(styles.container, flexDirection) } style={{ gap: gap, flexDirection: flexDirection, width: width }} >
      { children }
    </article>
  )
}