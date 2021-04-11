import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeToast,
  userShowToastSelector,
  userToastMessageSelector,
} from '../../features/userDataSlice';
import styled, { ThemeContext, keyframes } from 'styled-components';
import ErrorIcon from '@material-ui/icons/Error';

const fadein = keyframes`
  from {
      right: 0;
      opacity: 0;
    }
    to {
      right: 20px;
      opacity: 1;
    }
`;

const fadeout = keyframes`
    from {
      right: 20px;
      opacity: 1;
    }
    to {
      right: 0;
      opacity: 0;
    }
`;

const ToastContainer = styled.div`
  z-index: 1;
  position: absolute;
  right: 20px;
  background: ${({ toastBackground }) => toastBackground};
  border: 2px solid ${({ primary }) => primary};
  height: 50px;
  width: 300px;
  border-radius: 5px;
  display: grid;
  z-index: 1;
  align-items: center;
  justify-content: center;
  grid-template-columns: 50px 1fr;
  color: ${({ primary }) => primary};
  animation: ${fadein} 0.5s, ${fadeout} 0.5s 1500ms;
  & > p {
    justify-self: center;
  }
  .icon-section {
    height: 100%;
    display: grid;
    align-items: center;
    justify-items: center;
    border-right: 2px solid ${({ primary }) => primary};
  }
`;

const Toast = () => {
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const showToast = useSelector(userShowToastSelector);
  const message = useSelector(userToastMessageSelector);
  let timer;
  function handleTimeout() {
    timer = setTimeout(() => {
      dispatch(closeToast());
    }, 1500);
  }

  useEffect(() => {
    if (showToast) {
      handleTimeout();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showToast, timer]);
  return (
    showToast && (
      <ToastContainer {...theme}>
        <div className="icon-section">
          <ErrorIcon style={{ color: 'white' }} />
        </div>
        <p>{message}</p>
      </ToastContainer>
    )
  );
};

export default Toast;
