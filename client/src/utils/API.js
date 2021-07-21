import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?apikey=";

const APIKEY = "23c335db";

export default {
  getMovies: function (movie) {
    return axios.get(BASEURL + APIKEY + "&t=" + movie);
  },
};
