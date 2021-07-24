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

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getMovies(this.state.search)
      .then((res) => {
        console.log(res);
        this.setState({ movies: [res.data] });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <SearchForm
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <AllResults
          movies={this.state.movies}
          saveMovies={(movie) => this.saveMovie(movie)}
        />
      </div>
    );
  }
}

export default Home;
