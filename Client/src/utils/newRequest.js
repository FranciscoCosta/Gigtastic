import axios from "axios";

export const NewRequest = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  withCredentials: true,
});
