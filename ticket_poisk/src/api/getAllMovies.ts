import httpClient from "@/api/httpClient";
import Movie from "@/entities/Movie";

const getAllMovies = () => httpClient
    .get('/movies')
    .then((response) => response.data.map((movie: Movie) => new Movie(movie)));

export default getAllMovies;