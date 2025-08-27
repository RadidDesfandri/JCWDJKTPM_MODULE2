import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://trimcopper-us.backendless.app/api/data",
});
