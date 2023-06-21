"use client"
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TicketCard from "@/components/TicketCard/TicketCard";

export default function Home() {

  return (
    <>
      <Header />
      <TicketCard title="Властелин колец: Братство Кольца" genre="Фэнтези" posterUrl="https://i.postimg.cc/pdCLNMqX/1.webp" />
      <Footer />
    </>
  );
}
