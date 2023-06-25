import { ReactNode } from "react";
import Container from "@/components/Container/Container";
import styles from "./Modal.module.css";

interface ModalProps {
  children?: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children }: ModalProps) {
  return (
    <div className={styles.modal}>
      <Container flexDirection="column" gap="1.5rem">
        {children}
      </Container>
    </div>
  );
}
