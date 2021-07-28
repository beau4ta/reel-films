import React from "react";
import AllResults from "./allResults";
import "./savedResults.css";

const SavedResult = (props) => {
  const { deleteMovie } = props;
  console.log(props);

  return !props.movies ? (
    <div className="result-container">
      <div className="result-title container">
        <h3>Movies that You Saved</h3>
      </div>
    </div>
  ) : (
    <div className="result-container">
      <div className="result-title container">
        <h3>Movies that You Saved</h3>
        {props.movies.map((movie) => {
          return (
            <div>
              <AllResults
                title={movie.title}
                director={movie.director}
                plot={movie.plot}
                year={movie.year}
                poster={movie.poster}
                genre={movie.genre}
                _id={movie._id}
                deleteMovie={deleteMovie}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SavedResult;