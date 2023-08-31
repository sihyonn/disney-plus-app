import axios from "axios";

const instance = axios.create({
  baseURL: "https:://api.themoviedb.org/3",
  params: {
    api_key: "5b2e82871ec5c17fde225f1cd7464cee",
    language: "ko-KR",
  },
});

export default instance;
