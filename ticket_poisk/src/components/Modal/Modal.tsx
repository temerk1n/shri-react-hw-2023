import { MouseEventHandler, ReactNode } from "react";
import Container from "@/components/Container/Container";
import styles from "./Modal.module.css";

interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const handleCloseModal = (e: any) => {
    onClose();
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={handleCloseModal}>
      <div onClick={(e) => e.stopPropagation()}>
        <Container flexDirection="column" gap="1.5rem">
          {children}
        </Container>
      </div>
    </div>
  );
}
