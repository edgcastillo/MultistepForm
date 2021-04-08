import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";

const TextAreaStyles = styled.div`
  & > .textareaInput {
    resize: none;
    border-radius: 10px;
    padding: 15px;
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

const Label = styled.label`
  display: inline-block;
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
  margin-bottom: 15px;
`;

const TextArea = ({ elem }) => {
  const theme = useContext(ThemeContext);
  return (
    <TextAreaStyles {...theme}>
      <Label {...theme}>{elem.label}</Label>
      <textarea
        maxLength="140"
        className="textareaInput"
        rows="10"
        cols="40"
      ></textarea>
    </TextAreaStyles>
  );
};

export default TextArea;
