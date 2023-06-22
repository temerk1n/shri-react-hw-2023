import httpClient from "@/api/httpClient";
import Cinema from "@/entities/Cinema";

const getCinemas = () => httpClient
    .get('/cinemas')
    .then((response) => response.data.map((cinema: Cinema) => new Cinema(cinema)));

export default getCinemas;