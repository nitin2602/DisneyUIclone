import axios from "axios";

const movies = axios.get(
  "https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf"
);
const moviebygenreid = (id) =>
  axios.get(
   
    "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf&with_genres="+id);

export default {
  movies,
  moviebygenreid,
};
