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
                             key={movie.data.id}
                             title={movie.data.title}
                             director={movie.data.director}
                             genre={movie.data.genre}
                             plot={movie.data.plot}
                             poster={movie.data.poster}
                             _id={movie._id}
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