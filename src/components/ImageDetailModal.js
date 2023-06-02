import styled from "@emotion/styled";
import React from "react";

const ImageDetailModal = (props) => {
  return (
    <ModalBackground onClick={props.onCloseModal}>
      <ModalBox>
        <CloseButton onClick={props.onCloseModal}>X</CloseButton>
        <Modal>{props.children}</Modal>
      </ModalBox>
    </ModalBackground>
  );
};

export default ImageDetailModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0005;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  position: relative;
  width: 90%;
  aspect-ratio: 16 / 9;
  padding: 1rem;
`;

const Modal = styled.div``;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #0002;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
`;
