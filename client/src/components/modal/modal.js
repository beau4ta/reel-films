import React from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";


const ModalWrapper = styled.div`
  width: 1200px;
  height: 500px;
  background: #850707;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  z-index: 10;
  border-radius: 10px;
  border: inset;
  opacity: 90%;
  margin-left: 50px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
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

export const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
          <ModalWrapper showModal={showModal}>
            <ModalContent>

            </ModalContent>
            <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            />
          </ModalWrapper>
      ) : null}
    </>
  );
};
