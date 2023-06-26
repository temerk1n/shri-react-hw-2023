import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import ResetButtonBlock from "@/components/ResetButtonBlock/ResetButtonBlock";
import styles from "./ResetTicketsModal.module.css";

interface ResetTicketsModalProps {
  showModal: () => void;
  reset: () => void;
}

export default function ResetTicketsModal({
  showModal,
  reset,
}: ResetTicketsModalProps) {
  return (
    <Modal onClose={showModal}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>Удаление билета</h3>
          <ResetButtonBlock showModal={showModal} />
        </div>
        <div>Вы уверены, что хотите удалить билет?</div>
      </div>
      <div className={styles.buttons}>
        <Button text="Да" onClick={reset} variant="primary" />
        <Button text="Нет" onClick={showModal} variant="outline" />
      </div>
    </Modal>
  );
}
