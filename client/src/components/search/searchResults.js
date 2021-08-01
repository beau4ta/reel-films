import React, { useState } from 'react';
import './searchResults.css'
import styled from 'styled-components'
import { Modal } from '../modal/modal';
import { ModalStyle } from '../modal/modalStyle';

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
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    `;

    console.log(props);

    if (!saveMovie) {
        return (
            <div>
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
                            <Button onClick={() => deleteMovie(props._id)}><i className="fas fa-minus"></i></Button>
                            <Button onClick={openModal}><i className="fas fa-eye"></i></Button>
                        </div>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <ModalStyle />
            </div>
        )
    } else {

        return (
            <div>
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
                            <Button className='saveBtn' onClick={() => saveMovie(props)}><i className="fas fa-plus"></i></Button>
                            <Button onClick={openModal}><i className="fas fa-eye"></i></Button>
                        </div>
                    </div>
                </div>
                <Modal showModal={showModal} setShowModal={setShowModal} />
                <ModalStyle />
            </div>
        )
    }
}

export default SearchResults;