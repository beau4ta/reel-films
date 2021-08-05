import React, { useState } from 'react';
import './searchResults.css'
import styled from 'styled-components'
import { Modal } from '../modal/modal';
import { ModalStyle } from '../modal/modalStyle';
import API from '../../utils/API';

const SearchResults = (props) => {
    const { saveMovie } = props;
    const { deleteMovie } = props;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }


    const Button = styled.button`
    padding: 5px;
    margin: 5px;
    border-radius: 4px;
    border: none;
    background: #850707;
    color: black;
    font-size: 24px;
    cursor: pointer;
    `;

    console.log(props);

    if (!saveMovie) {
        return (
            <div className='d-flex justify-content-center container-fluid'>
                <div className='movie-container d-flex justify-content-center container-fluid'>
                    <div className='movie-image d-flex justify-content-center'>
                        <img src={props.poster} alt={props.title} />
                    </div>
                    <div className='movie-info'>
                        <h2>{props.title}</h2>
                        <h4>{props.year}</h4>
                        <h4>{props.director}</h4>
                        <h4>{props.plot}</h4>
                        <h4>{props.genre}</h4>
                        <h4>{props.rated}</h4>
                        <h4>{props.runtime}</h4>
                        <div className='button-container'>
                            <Button onClick={() => deleteMovie(props._id)}><i className="fas fa-minus"></i></Button>
                            <Button onClick={openModal}><i className="fas fa-eye"></i></Button>
                        </div>
                    </div>
                </div>
                <Modal searchMovie={props.title} showModal={showModal} setShowModal={setShowModal} />
                <ModalStyle />
            </div>
        )
    } else {

        return (
            <div className='d-flex justify-content-center container-fluid'>
                <div className='movie-container d-flex justify-content-center container-fluid'>
                    <div className='movie-image'>
                        <img src={props.poster} alt={props.title} />
                    </div>
                    <div className='movie-info'>
                        <h2>{props.title}</h2>
                        <h4>{props.year}</h4>
                        <h4>{props.director}</h4>
                        <h4>{props.plot}</h4>
                        <h4>{props.genre}</h4>
                        <div className='button-container'>
                            <Button className='saveBtn' onClick={() => saveMovie(props)}><i className="fas fa-plus"></i></Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;