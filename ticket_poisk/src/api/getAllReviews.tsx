import httpClient from "@/api/httpClient";

const getAllReviews = () => httpClient
    .get('/reviews')
    .then((response) => response.data);

export default getAllReviews;
