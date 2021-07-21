import React from 'react';
import SearchResults from '../search/searchResults';

const AllResults = props => {
    const { saveMovie } = props;
    console.log(props)

    return (!props.movies) ? (
       
        <div className="result-container">
            <div className="result-title">
                <h3>Search Results:</h3>
            </div>
        </div>
) : (
        
            <div className="result-container">
                <div className="result-title">
                    <h3>Search Results:</h3>
                    {props.movies.map(movie => {
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
        
    )
}

export default AllResults;