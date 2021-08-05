import React from "react";
import AllResults from "./allResults";
import "./savedResults.css";
import moment from "moment";

const SavedResult = props => {
    const { deleteMovie } = props;
    console.log(props)
    return (!props.movies) ? (
        <div className='d-flex justify-content-between align-items-center'>
            <div className="result-container">
                <div className="result-title">
                    <h3 className='saved-title'>Movies that You Saved</h3>
                </div>
            </div>
            </div>
    ) : (
        <div className='d-flex justify-content-center container-fluid align-items-center'>
                <div className="result-container container-fluid d-flex justify-content-center">
                    <div className="result-title">
                        <h3 className='saved-title'>Movies that You Saved</h3>
                        {props.movies.map(movie => {
                            return (
                                <div className='info-container'>
                            <AllResults
                             title={movie.title}
                             director={movie.director}
                             plot={movie.plot}
                             year={moment(movie.year).format('YYYY')}
                             poster={movie.poster}
                             genre={movie.genre}
                             rated={movie.rated}
                             runtime={movie.runtime}
                             _id={movie._id}
                             deleteMovie={deleteMovie}
                             />
                             </div>
                            );
                        })}
                    </div>
                </div>
            </div>
                
        )
}
export default SavedResult
