import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userSaveSelection } from '../../features/userDataSlice';
import styled, { ThemeContext, css } from 'styled-components';

const Legend = styled.p`
  font-size: 18px;
  color: ${({ primary }) => primary};
  margin-top: 30px;
`;

const Label = styled.label`
  height: 75px;
  width: 100%;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  background: ${({ background }) => background};
  color: ${({ primary }) => primary};
  border: 2px solid ${({ border }) => border};
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ active }) => active};
  }

  ${(props) =>
    props.checked &&
    css`
      border: 2px solid ${({ active }) => active};
    `}
`;

const Input = styled.input`
  justify-self: center;
  visibility: hidden;
`;

const Radio = ({ elem, userChoice }) => {
  const { value } = elem;
  const dispatch = useDispatch();
  const [radioValue, setRadioValue] = useState(userChoice);
  const theme = useContext(ThemeContext);
  useEffect(() => {
    dispatch(userSaveSelection({ radioValue }));
  }, [radioValue]);
  const handleChange = (e) => {
    setRadioValue(e.target.value);
  };
  return (
    <React.Fragment>
      <Legend {...theme}>{elem.text}</Legend>
      {elem.options.map((option, i) => {
        const checked = radioValue === option.value;
        return (
          <Label {...theme} checked={checked} key={`${option.value}${i}`}>
            <Input
              checked={checked}
              type="radio"
              value={option.value}
              onChange={(e) => handleChange(e)}
            />
            {option.label}
          </Label>
        );
      })}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userChoice: state.userData.userChoice,
  };
};

export default connect(mapStateToProps)(Radio);
