"use client"

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import getMovieById from "@/api/getMovieById";
import Movie from "@/entities/Movie";
import ReviewCardList from "@/components/ReviewCardList/ReviewCardList";
import getReviewsByMovieId from "@/api/getReviewsByMovieId";
import styles from "./moviePage.module.css"

interface MovieProps {
  params: {
    id: string,
  }
}

export default function MoviePage(props: MovieProps) {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieById(props.params.id)
      .then(r => setMovie(r));

    getReviewsByMovieId(props.params.id)
      .then(r => setReviews(r));

  }, []);

  return (
    <div className={ styles.content }>
      <MovieCard movie={movie} />
      <ReviewCardList reviews={reviews} />
    </div>
  )
}
