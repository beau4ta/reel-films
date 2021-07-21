
import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?apikey=";

const APIKEY = "23c335db";

export default {
getMovies: function(search) {
  return axios.get(BASEURL + APIKEY + '&t=' + search) 
},

createUser: function(user) {
    return axios.post("/api/movies/register", user)
  },
  signIn: function(user) {
    return axios.post("/api/movies/signin", user)
  },
}


