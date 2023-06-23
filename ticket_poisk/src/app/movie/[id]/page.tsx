"use client"

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import getMovieById from "@/api/getMovieById";
import Movie from "@/entities/Movie";

interface MovieProps {
  params: {
    id: string,
  }
}

export default function MoviePage(props: MovieProps) {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    getMovieById(props.params.id)
      .then(r => setMovie(r))
  }, []);

  return (
    <>
      <MovieCard movie={movie}/>
    </>
  )
}
