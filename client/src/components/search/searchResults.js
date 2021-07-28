import React from 'react';
import './searchResults.css'

const SearchResults = (props) => {
    const { saveMovie } = props;
    const { deleteMovie } = props;

    console.log(props);

    if(!saveMovie){
        return(
            <div className='movie-container d-flex'>
                <div className='movie-image container'>
                    <img src={props.poster} alt={props.title} />
                </div>
                <div className='container-fluid movie-info'>
                    <h2>{props.title}</h2>
                    <h4>{props.year}</h4>
                    <h4>{props.director}</h4>
                    <h4>{props.plot}</h4>
                    <h4>{props.genre}</h4>
                    <div className='button-container'>
                <button className='deleteBtn' onClick={() => deleteMovie(props)}><i className="fas fa-minus"></i></button>    
                </div>
                </div>
            </div>
        )
    } else {
    
    return(
        <div className='movie-container d-flex'>
            <div className='movie-image container'>
                <img src={props.poster} alt={props.title} />
            </div>
            <div className='movie-info'>
                <h2>{props.title}</h2>
                <h4>{props.year}</h4>
                <h4>{props.director}</h4>
                <h4>{props.plot}</h4>
                <h4>{props.genre}</h4>
                <div className='button-container'>
            <button className='saveBtn' onClick={() => saveMovie(props)}><i className="fas fa-plus"></i></button>
            </div>
            </div>
        </div>
    )
}
}

export default SearchResults;