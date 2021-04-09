import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const Container = styled.div``;

const Select = styled.select`
  height: 50px;
  width: 100%;
  padding: 5px;
  font-size: 18px;
  display: inline-block;
  border-radius: 10px;
  background-color: ${({ background }) => background};
  color: ${({ secondary }) => secondary};
  border: 2px solid ${({ border }) => border};
  &:focus {
    outline: none;
    border: 2px solid ${({ active }) => active};
  }
  &:hover {
    cursor: pointer;
    border: 2px solid ${({ active }) => active};
  }
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const SelectField = ({ elem }) => {
  console.log(elem);
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Label {...theme}>{elem.label}</Label>
      <Select {...theme}>
        {elem.options.map((obj, i) => {
          return (
            <option key={i} value={obj.value}>
              {obj.text}
            </option>
          );
        })}
      </Select>
    </Container>
  );
};

export default SelectField;
