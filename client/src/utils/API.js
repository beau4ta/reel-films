import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?apikey=";

const APIKEY = "b4f70639";

export default {
  getMovies: function (movie) {
    return axios.get(BASEURL + APIKEY + "&" + movie);
  },
};
