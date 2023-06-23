import Container from "@/components/Container/Container";
import styles from "./Cart.module.css";

export default function Cart() {
  return (
    <>
      <div className={styles.content}>
        <Container flexDirection="row" justifyContent="space-between">
          <h3>Итого билетов:</h3>
          <span>7</span>
        </Container>
      </div>
    </>
  );
}
