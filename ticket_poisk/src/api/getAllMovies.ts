import httpClient from "@/api/httpClient";

const getAllMovies = () => httpClient
    .get('/movies')
    .then((response) => response.data);

export default getAllMovies;