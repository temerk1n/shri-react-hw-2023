import Link from "next/link";
import styles from "./header.module.css"
import Image from "next/image";

export default function Header() {
  return (
    <div className={ styles.header }>
      <Link href='/'>Билетопоиск</Link>
      <Link href='/cart'>
          <Image src='/cartIcon.svg' alt='cart' width="32" height="32" />
      </Link>
    </div>
  )
}