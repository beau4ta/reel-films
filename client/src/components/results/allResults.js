import React from "react";
import SearchResults from "../search/searchResults";

const AllResults = (props) => {
  const { saveMovie } = props;
  const { deleteMovie } = props;
  console.log(props);

  return !props.movies ? (
    <div className="result-container-2 container-fluid d-flex">
      <div className="result-title">
            <div className='d-flex justify-content-center'>
              <SearchResults
                key={props._id}
                title={props.title}
                year={props.year}
                director={props.director}
                genre={props.genre}
                plot={props.plot}
                poster={props.poster}
                rated={props.rated}
                runtime={props.runtime}
                _id={props._id}
                deleteMovie={deleteMovie}
              />
            </div>
      </div>
    </div>
  ) : (
    <div className="result-container-2 container-fluid d-flex justify-content-center">
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
                rated={movie.Rated}
                runtime={movie.Runtime}
                _id={props._id}
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
