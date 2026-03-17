import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "/api",
  withCredentials: true,
});

export default axiosInstance;
/*axio sends the request from the frontend to the backend and axios instance is used to that we dont have to writee http://localhost/api/auht/login every time we can just use axiosInstance.get("/login") and it'll work
 */
