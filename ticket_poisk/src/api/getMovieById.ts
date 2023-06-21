import httpClient from "@/api/httpClient";

const getMovieById = (id: string) => httpClient
    .get('/movie', {
        params: {
            movieId: id,
        }
    })
    .then((response) => response.data);

export default getMovieById;
