"use client"
import MovieCard from "@/components/MovieCard/MovieCard";
import getMovieById from "@/api/getMovieById";
import ReviewCardList from "@/components/ReviewCardList/ReviewCardList";
import getReviewsByMovieId from "@/api/getReviewsByMovieId";
import styles from "./moviePage.module.css"

interface MovieProps {
  params: {
    id: string,
  }
}

export default async function MoviePage(props: MovieProps) {
  const movie = await getMovieById(props.params.id);
  const reviews = await getReviewsByMovieId(props.params.id);

  return (
    <div className={ styles.content }>
      <MovieCard movie={movie} />
      <ReviewCardList reviews={reviews} />
    </div>
  )
}
