import axios from "axios";

const REST_API_BASE_URL = "http://10.0.2.2:8080";
const api = axios.create({
  baseURL: REST_API_BASE_URL,
});

export default api;