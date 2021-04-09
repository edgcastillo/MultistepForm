import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

const TextFieldStyles = styled.div`
  & > input {
    width: 97%;
    height: 50px;
    border-radius: 10px;
    padding: 0 0 0 15px;
    background-color: ${({ background }) => background};
    color: ${({ secondary }) => secondary};
    border: 2px solid ${({ border }) => border};
    caret-color: ${({ active }) => active};
    font-size: 18px;
    &:focus {
      outline: none;
      border: 2px solid ${({ active }) => active};
    }
  }
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const TextField = ({ elem }) => {
  const { id, component, label, validation, required, value } = elem;
  const [fieldValue, setFieldValue] = useState(value);
  // TODO: validation for later
  const theme = useContext(ThemeContext);
  return (
    <TextFieldStyles {...theme}>
      <Label {...theme} htmlFor={`${component}${id}`}>
        {label}
      </Label>
      <input
        type="text"
        value={fieldValue}
        name={`${component}${id}`}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextFieldStyles>
  );
};

export default TextField;
