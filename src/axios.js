import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/furnisell-5ba89/us-central1/api",
});

export default instance;
