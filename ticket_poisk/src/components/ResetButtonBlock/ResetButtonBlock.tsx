import styles from "@/components/TicketCard/TicketCard.module.css";
import Button from "@/components/Button/Button";

interface ResetButtonProps {
  showModal: () => void;
}

export default function ResetButtonBlock({ showModal }: ResetButtonProps) {
  return (
    <div className={styles.deleteButtonBlock}>
      <Button iconUrl="/close.svg" onClick={showModal} isDeleteButton={true} />
    </div>
  );
}
