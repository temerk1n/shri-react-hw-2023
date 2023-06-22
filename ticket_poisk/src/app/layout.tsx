import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>{children}</body>
    </html>
  )
}
