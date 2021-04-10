import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
  const [textAreaValue, setTextAreaValue] = useState(
    () => Cookies.get(`${elemId}`) || value
  );
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const clearCookieTime = setTimeForCookies(5);
  useEffect(() => {
    Cookies.set(`${elemId}`, textAreaValue, { expires: clearCookieTime });
    dispatch(
      userSaveData({
        elemId,
        id,
        value: textAreaValue,
        isRequired: required,
      })
    );
  }, [textAreaValue]);
  return (
    <TextAreaStyles {...theme}>
      <Label {...theme}>{elem.label}</Label>
      <textarea
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
        maxLength={maxLength}
        className="textareaInput"
        rows="10"
        cols="40"
      ></textarea>
    </TextAreaStyles>
  );
};

export default TextArea;
