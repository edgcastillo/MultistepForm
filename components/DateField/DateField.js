import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const DatePickerComponent = styled.input`
  width: 50%;
  height: 35px;
  border: none;
  padding: 10px;
  background-color: ${({ background }) => background};
  color: ${({ secondary }) => secondary};
  border: 2px solid ${({ border }) => border};
  font-size: 16px;
  border-radius: 10px;
  &:focus {
    outline: none;
    border: 2px solid ${({ active }) => active};
  }
  &:hover {
    border: 2px solid ${({ active }) => active};
  }
  &::-webkit-calendar-picker-indicator {
  }
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const DatePicker = ({ elem }) => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Label {...theme}>{elem.label}</Label>
      <DatePickerComponent type="date" {...theme} autoComplete="off" />
    </>
  );
};

export default DatePicker;
