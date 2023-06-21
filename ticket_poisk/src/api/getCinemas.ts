import httpClient from "@/api/httpClient";

const getCinemas = () => httpClient
    .get('/cinemas')
    .then((response) => response.data);

export default getCinemas;