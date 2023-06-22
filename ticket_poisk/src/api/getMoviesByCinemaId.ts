import httpClient from "@/api/httpClient";
import Movie from "@/entities/Movie";

const getMoviesByCinemaId = (id: string) => httpClient
    .get('/movies', {
        params: {
            cinemaId: id,
        },
    })
    .then((response) => response.data.map((movie: Movie) => new Movie(movie)));

export default getMoviesByCinemaId;