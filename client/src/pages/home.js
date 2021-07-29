import React, { Component } from "react";
import SearchForm from "../components/search/searchForm";
import AllResults from "../components/results/allResults";
import API from "../utils/API";

class Home extends Component {
  state = {
    search: "",
    movies: [],
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

      handleFormSubmit = event => {
        event.preventDefault();
        API.getSearchMovies(this.state.search)
        .then(res => {
            console.log(res.data.Search)
            this.setState({ movies: [...res.data.Search] })
        })
        .catch(err => console.log(err));
    };

    saveMovie = movie => {
        API.saveMovie({
            title: movie.title,
            director: movie.director,
            plot: movie.plot,
            poster: movie.poster,
            genre: movie.genre,
            year: movie.year
        })
        .then(res => console.log("Movie Saved!", res))
        .catch(err => console.log(err.response))
    }

    render(){
        return(
            <div>
                <SearchForm
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit} 
                />
                <AllResults 
                movies={this.state.movies}
                saveMovie={movie => this.saveMovie(movie)}
                />
            </div>
        )
    }
}

export default Home;
