import './globals.css'
import { Metadata } from "next";
import styles from "./layout.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {Roboto} from "next/font/google"

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

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
      <body className={ roboto.className }>
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
