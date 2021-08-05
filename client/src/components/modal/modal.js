import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import API from '../../utils/API';


const ModalWrapper = styled.div`
  width: 800px;
  height: 800px;
  background: #850707;
  color: #000;
  display: flex;
  position: fixed;
  top: 40px;
  left: calc(50% - 400px);
  bottom: 40px;
  z-index: 100;
  border-radius: 10px;
  border: inset;
  opacity: 90%;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: white;
  text-shadow: none;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: white;
`;




export const Modal = ({searchMovie, showModal, setShowModal}) => {

  const [movies, setMovies] = useState();

  useEffect (() => {
    API.getMovieInfo(searchMovie)
    .then(res => {
      console.log(res.data)
      setMovies(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      {showModal ? (
          <ModalWrapper showModal={showModal}>
            <ModalContent>
              {movies.Title}, {movies.Year}
              <br/>
              Director: {movies.Director}
              <br/>
              Genre: {movies.Genre}
              <br/>
              <img src={movies.Poster}/>
              <br/>
              Plot: {movies.Plot}
            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
      ) : null}
    </div>
  );
};
