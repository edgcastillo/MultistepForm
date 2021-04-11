import { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import PersonIcon from '@material-ui/icons/Person';

// TODO: This could be another button, maybe refactor later

const BigCircleStepStyles = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  z-index: 0;
  color: ${({ border }) => border};
  background: ${({ unactive }) => unactive};
  ${(props) =>
    props.activeStep &&
    css`
      background: ${({ active }) => active};
      color: ${({ primary }) => primary};
    `};

  & > .icon {
    height: 50px;
    display: grid;
    justify-items: center;
    align-items: center;

    & > svg {
      font-size: 32px;
    }
  }
`;

const SmallCircleStyles = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background: ${({ background }) => background};
  border: 2px solid ${({ border }) => border};
  ${(props) =>
    props.activeStep &&
    css`
      background: ${({ active }) => active};
    `};
`;

export const SmallCircleStep = ({ activeStep }) => {
  const theme = useContext(ThemeContext);
  return <SmallCircleStyles {...theme} activeStep={activeStep} />;
};

export const BigCircleStep = ({ activeStep }) => {
  const theme = useContext(ThemeContext);
  return (
    <BigCircleStepStyles {...theme} activeStep={activeStep}>
      <span className="icon">
        <PersonIcon />
      </span>
    </BigCircleStepStyles>
  );
};
