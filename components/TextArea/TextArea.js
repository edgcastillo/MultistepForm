import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext, css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { userSaveData } from '../../features/userDataSlice';
import Cookies from 'js-cookie';
import setTimeForCookies from '../../utils/setTimeForCookies';

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
    ${(props) =>
      props.isValid !== true &&
      props.isTouched === true &&
      css`
        border: 2px solid ${({ warning }) => warning};
      `}
  }
`;

const Label = styled.label`
  display: inline-block;
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
  margin-bottom: 15px;
`;

const TextArea = ({ elem }) => {
  const {
    id: elemId,
    label,
    component,
    maxLength,
    validation,
    required,
    value,
  } = elem;
  const [isTextAreaFieldValid, setTextAreaFieldValid] = useState(false);
  const [isTextAreaFieldTouched, setTextAreaFieldTouched] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(
    () => Cookies.get(`${elemId}`) || value
  );
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const clearCookieTime = setTimeForCookies();
  const pattern = validation ? validation : /\S+/;
  const regex = new RegExp(pattern, 'g');
  useEffect(() => {
    Cookies.set(`${elemId}`, textAreaValue, { expires: clearCookieTime });
    const isValid = regex.test(textAreaValue);
    console.log(isValid);
    if (isValid && required) {
      setTextAreaFieldValid(true);
    } else if (!isValid && required) {
      setTextAreaFieldValid(false);
    }
    dispatch(
      userSaveData({
        elemId,
        id,
        isValid: isValid,
        value: textAreaValue,
        isRequired: required,
      })
    );
  }, [textAreaValue]);
  return (
    <TextAreaStyles
      {...theme}
      isValid={isTextAreaFieldValid}
      isTouched={isTextAreaFieldTouched}
    >
      <Label {...theme}>{elem.label}</Label>
      <textarea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        onFocus={() => setTextAreaFieldTouched(true)}
        maxLength={maxLength}
        className="textareaInput"
        rows="10"
        cols="40"
      ></textarea>
    </TextAreaStyles>
  );
};

export default TextArea;
