
import axios from "axios";

const BASEURL = "https://www.omdbapi.com/?apikey=";

const APIKEY = "23c335db";

export default {
  getSearchMovies: function (search) {
    return axios.get(BASEURL + APIKEY + '&s=' + search);
  },

  getMovieInfo: function (search) {
    return axios.get(BASEURL + APIKEY + '&t=' + search);
  },

  getMovies: function () {
    return axios.get('/api/movies');
  },

saveMovie: function (savedMovies) {
  return axios.post('/api/movies', savedMovies);
},

  deleteMovie: function (id) {
    return axios.delete('/api/movies/' + id);
  },

  createUser: function (user) {
    return axios.post("/api/user/signup", user);
  },

  signIn: function (user) {
    return axios.post("/api/user/signin", user);
  },

  checkLoggedIn: function () {
    return axios.get('/api/user/check');
  },

  logOut: function () {
    return axios.post('/api/user/logout');
  }
};


