import React, { useEffect, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { userSaveData, userDataSelector } from '../../features/userDataSlice';
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
  const { id: elemId, label, component, validation, required, value } = elem;
  const [fieldValue, setFieldValue] = useState(
    () => Cookies.get(`${elemId}`) || value
  );
  const clearCookieTime = setTimeForCookies(5);
  const userData = useSelector(userDataSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const theme = useContext(ThemeContext);
  useEffect(() => {
    Cookies.set(`${elemId}`, fieldValue, { expires: clearCookieTime });
    dispatch(
      userSaveData({
        elemId,
        id,
        value: fieldValue,
        isRequired: required,
      })
    );
  }, [fieldValue]);
  return (
    <TextFieldStyles {...theme}>
      <Label {...theme} htmlFor={`${component}${id}`}>
        {label}
      </Label>
      <input
        type="text"
        value={fieldValue}
        name={`${component}${id}`}
        onChange={(e) => setFieldValue(e.target.value)}
      />
    </TextFieldStyles>
  );
};

export default TextField;
