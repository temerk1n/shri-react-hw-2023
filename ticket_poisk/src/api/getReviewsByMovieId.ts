import httpClient from "@/api/httpClient";

const getReviewsByMovieId = (id: string) => httpClient
    .get('/reviews', {
        params: {
            movieId: id,
        }
    })
    .then((response) => response.data);

export default getReviewsByMovieId;
