import httpClient from "@/api/httpClient";
import Review from "@/entities/Review";

const getAllReviews = () => httpClient
    .get('/reviews')
    .then((response) => response.data.map((review: Review) => new Review(review)));

export default getAllReviews;
