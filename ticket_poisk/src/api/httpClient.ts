import axios, {AxiosInstance} from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export default httpClient;