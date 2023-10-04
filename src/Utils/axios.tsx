import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://jobster-api-ydds.onrender.com/api/v1",
});

export default customFetch;
