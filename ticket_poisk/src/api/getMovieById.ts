import httpClient from "@/api/httpClient";
import Movie from "@/entities/Movie";

const getMovieById = (id: string) => httpClient
    .get('/movie', {
        params: {
            movieId: id,
        }
    })
    .then((response) => new Movie(response.data));

export default getMovieById;
