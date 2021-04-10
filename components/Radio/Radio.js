import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
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

const Radio = ({ elem }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const theme = useContext(ThemeContext);
  useEffect(() => {
    dispatch(userSaveSelection({ value }));
  }, [value]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <React.Fragment>
      <Legend {...theme}>{elem.text}</Legend>
      {elem.options.map((option, i) => {
        const checked = value === option.value;
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

export default Radio;
