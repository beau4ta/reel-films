import React from 'react';

  function movieCard (props) {
     return(
        <div className= 'card-container'>
            <img src= {props.Movie.thumbnail} />
            <h2>{props.Movie.name}</h2>
            <p>{props.Movie.href}</p>
            <p>{props.Movie.summary}</p>
        </div>
    )
  } 

export default movieCard; 