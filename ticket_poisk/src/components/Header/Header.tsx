import Link from "next/link";
import styles from "./header.module.css"

export default function Header() {
  return (
    <div className={ styles.header }>
      <Link href='/'>Билетопоиск</Link>
      <Link href='/cart'>
          <img src='/cartIcon.svg' alt='cart' />
      </Link>
    </div>
  )
}