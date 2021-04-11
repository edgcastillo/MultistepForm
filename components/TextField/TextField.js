import React, { useEffect, useContext, useState } from 'react';
import styled, { ThemeContext, css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { userSaveData } from '../../features/userDataSlice';
import Cookies from 'js-cookie';
import setTimeForCookies from '../../utils/setTimeForCookies';

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
    ${(props) =>
      props.isValid !== true &&
      props.isTouched === true &&
      css`
        border: 2px solid ${({ warning }) => warning};
      `}
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 50000s ease-in-out 0s,
      color 5000s ease-in-out 0s;
  }
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const TextField = ({ elem }) => {
  // Props
  const { id: elemId, label, component, validation, required, value } = elem;
  const theme = useContext(ThemeContext);

  // useState
  const [isFieldValid, setFieldValid] = useState(false);
  const [isFieldTouched, setFieldTouched] = useState(false);
  const [fieldValue, setFieldValue] = useState(
    () => Cookies.get(`${elemId}`) || value
  );

  // Redux and NextJS
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const clearCookieTime = setTimeForCookies();
  const pattern = validation ? validation : /\S+/;
  const regex = new RegExp(pattern, 'g');

  useEffect(() => {
    Cookies.set(`${elemId}`, fieldValue, { expires: clearCookieTime });
    const isValid = regex.test(fieldValue);
    if (isValid && required) {
      setFieldValid(true);
    } else if (!isValid && required) {
      setFieldValid(false);
    }
    dispatch(
      userSaveData({
        elemId,
        label,
        id,
        isValid: isValid,
        value: fieldValue,
        isRequired: required,
      })
    );
  }, [fieldValue]);
  return (
    <TextFieldStyles
      {...theme}
      isValid={isFieldValid}
      isTouched={isFieldTouched}
    >
      <Label {...theme} htmlFor={`${component}${id}`}>
        {label}
      </Label>
      <input
        type="text"
        value={fieldValue}
        name={`${component}${id}`}
        onChange={(e) => setFieldValue(e.target.value)}
        onFocus={() => setFieldTouched(true)}
      />
    </TextFieldStyles>
  );
};

export default TextField;
