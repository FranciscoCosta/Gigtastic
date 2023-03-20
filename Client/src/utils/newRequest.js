import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://gigtastic.onrender.com/api/v1",
  withCredentials: true,
});

export default newRequest;
