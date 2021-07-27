import React from  'react'
import AllResults from './allResults';
import './savedResults.css'

const SavedResult = props => {
    const { deleteMovie } = props;
    console.log(props)
    
    return (props.movies.length === 0) ? (

            <div className="result-container">
                <div className="result-title">
                    <h3>Movies that You Saved</h3>
                </div>
            </div>
    ) : (

                <div className="result-container">
                    <div className="result-title">
                        <h3>Movies that You Saved</h3>
                        {props.movies.map(movie => {
                            return (
                                <div>
                            <AllResults
                             key={movie.id}
                             title={movie.movies.movies[0].title}
                             director={movie.movies[0].director}
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
        )
}
export default SavedResult