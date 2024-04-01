import axios from "axios";
const REST_API_BASE_URL = 'http://localhost:8080/games';
const api =  axios.create({
    baseURL: REST_API_BASE_URL
});
export default api