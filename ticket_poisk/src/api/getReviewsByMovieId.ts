import httpClient from "@/api/httpClient";
import Review from "@/entities/Review";

const getReviewsByMovieId = (id: string) => httpClient
    .get('/reviews', {
        params: {
            movieId: id,
        }
    })
    .then((response) => response.data.map((review: Review) => new Review(review)));

export default getReviewsByMovieId;
