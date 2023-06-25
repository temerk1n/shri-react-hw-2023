import "./globals.css";
import { Metadata } from "next";
import styles from "./layout&loading.module.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import StoreProvider from "@/store/StoreProvider";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Билетопоиск",
  description: "Крупнейший сервис о кино в рунете",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <StoreProvider>
        <body className={roboto.className}>
          <main className={styles.page}>
            <Header />
            <div className={styles.content}>{children}</div>
            <Footer />
          </main>
        </body>
      </StoreProvider>
    </html>
  );
}
