import React from 'react';
import './searchForm.css';

const SearchForm = (props) => {
    return(
        <div className='container-fluid d-flex justify-content-center'>
        <div className='search-container d-flex flex-column align-items-center justify-content-center col-8'>
            <h1 className='search-title'>Search for a movie!</h1>
            <input 
            className='search-bar col-6' 
            type='text' 
            placeholder='Search...'
            value={props.search}
            onChange={props.handleInputChange}
            /><button className='searchBtn' onClick={props.handleFormSubmit}><i className="fas fa-search"></i></button>
        </div>
        </div>
    )
}

export default SearchForm;