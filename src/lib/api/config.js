import axios from "axios";

const baseUrl = "http://localhost:3000";
const apiUrl = `${baseUrl}/api`

function client(auth) {
    const apiClient = axios.create({ baseURL: apiUrl });
    if (auth) {
        apiClient.defaults.headers.common["Authorization"] = localStorage.getItem("token");
    }

    return apiClient;
}


export default client;