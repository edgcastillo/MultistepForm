import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import styled, { ThemeContext } from 'styled-components';
import { CloseButton } from '../Button/Button';

const ModalStyles = styled.div`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ unactive }) => unactive};
  border: 2px solid ${({ active }) => active};
  height: 200px;
  width: 400px;
  border-radius: 5px;
  padding: 10px;
  display: grid;
  color: ${({ secondary }) => secondary};
  grid-template-columns: 1fr auto;
  & > button {
    justify-self: start;
  }
  & > h3 {
    justify-self: center;
    align-self: center;
  }
`;

const PortalModal = ({ message, isOpen, onClose, children }) => {
  const theme = useContext(ThemeContext);
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalStyles {...theme}>
      <h3>{message}</h3>
      <CloseButton {...theme} onClick={onClose}>
        <CloseIcon style={{ color: 'white' }} />
      </CloseButton>
    </ModalStyles>,
    document.body
  );
};

export default PortalModal;
