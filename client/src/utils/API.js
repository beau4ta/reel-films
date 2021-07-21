
import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?apikey=";

const APIKEY = "23c335db";

createUser: function(user) {
    return axios.post("/api/movies/register", user)
  },
  signIn: function(user) {
    return axios.post("/api/movies/signin", user)
  },
}


