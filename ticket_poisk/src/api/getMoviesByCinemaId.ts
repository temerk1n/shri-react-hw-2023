import httpClient from "@/api/httpClient";

const getMoviesByCinemaId = (id: string) => httpClient
    .get('/movies', {
        params: {
            cinemaId: id,
        },
    })
    .then((response) => response.data);

export default getMoviesByCinemaId;