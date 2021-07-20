<<<<<<< HEAD
import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?apikey=";

const APIKEY = "b4f70639";

export default {
  getMovies: function (movie) {
    return axios.get(BASEURL + APIKEY + "&" + movie);
  },
};
=======
import axios from 'axios';

const BASEURL = 'http://www.omdbapi.com/?apikey='

const APIKEY = 'b4f70639'

export default {
    getMovies: function(movie) {
    return axios.get(BASEURL + APIKEY + '&' + movie )
}
}
>>>>>>> a47c071bfdf547cabda0fb1c20eaa11c131740d6
