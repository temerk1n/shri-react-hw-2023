import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children?: ReactNode,
}

export default function Layout({children}: LayoutProps) {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}
