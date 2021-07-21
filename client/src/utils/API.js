import axios from 'axios';

const BASEURL = 'http://www.omdbapi.com/?apikey='

const APIKEY = 'b4f70639'

export default {
    getMovies: function(movie) {
    return axios.get(BASEURL + APIKEY + '&' + movie )
},
createUser: function(user) {
    return axios.post("/api/movies/register", user)
  },
  signIn: function(user) {
    return axios.post("/api/movies/signin", user)
  },
}