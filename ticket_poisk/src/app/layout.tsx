import './globals.css'
import { Metadata } from "next";
import styles from "./layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: 'Билетопоиск',
  description: 'Крупнейший сервис о кино в рунете',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
      <div className={styles.page}>
        <Header />
        <div className={styles.content}>
          {children}
        </div>
        <Footer />
      </div>
      </body>
    </html>
  )
}
