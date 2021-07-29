import React from "react";
import SearchResults from "../search/searchResults";
import SavedResults from './savedResults';

const AllResults = (props) => {
  const { saveMovie } = props;
  console.log(props);

  return !props.movies ? (
    <div className="result-container">
      <div className="result-title">
            <div>
              <SearchResults
                key={props._id}
                title={props.title}
                year={props.year}
                director={props.director}
                genre={props.genre}
                plot={props.plot}
                poster={props.poster}
                deleteMovie={props.deleteMovie}
              />
            </div>
      </div>
    </div>
  ) : (
    <div className="result-container">
      <div className="result-title">

        {props.movies.map((movie) => {
          return (
            <div>
              <SearchResults
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                director={movie.Director}
                genre={movie.Genre}
                plot={movie.Plot}
                poster={movie.Poster}
                saveMovie={saveMovie}
              />
            </div>
          );
        })}
          
      </div>
    </div>
  );
};

export default AllResults;
