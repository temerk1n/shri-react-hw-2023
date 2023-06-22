import Movie from "@/entities/Movie";
import TicketCard from "@/components/TicketCard/TicketCard";
import styles from './TicketCardList.module.css'

interface TicketCardListProps {
  movies: Movie[],
}

export default function TicketCardList({movies}: TicketCardListProps) {

  const tickets = movies.map((movie) => {
    return <TicketCard id={movie.id} title={movie.title} genre={movie.genre} posterUrl={movie.posterUrl} key={movie.id}/>
  })


  return (
    <div className={styles.container}>
      { tickets }
    </div>
  )
}