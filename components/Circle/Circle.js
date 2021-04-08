import { useContext } from "react";
import styled, { css, ThemeContext } from "styled-components";
import PersonIcon from "@material-ui/icons/Person";

// TODO: This could be another button, maybe refactor later

const BigCircleStepStyles = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
