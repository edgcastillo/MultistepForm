import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext, css } from 'styled-components';
import { userSaveData } from '../../features/userDataSlice';
import Cookies from 'js-cookie';
import setTimeForCookies from '../../utils/setTimeForCookies';

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
  ${(props) =>
    props.isValid !== true &&
    props.isTouched === true &&
    css`
      border: 2px solid ${({ warning }) => warning};
    `}
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const SelectField = ({ elem }) => {
  const { id: elemId, value, required, label, validation } = elem;
  const dispatch = useDispatch();
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const [isSelectFieldValid, setSelectFieldValid] = useState(false);
  const [isSelectFieldTouched, setSelectFieldTouched] = useState(false);
  const [optionsValue, setOptionsValue] = useState(
    () => Cookies.get(`${elemId}`) || value
  );
  const clearCookieTime = setTimeForCookies();
  const pattern = validation ? validation : /\S+/;
  const regex = new RegExp(pattern, 'g');
  useEffect(() => {
    Cookies.set(`${elemId}`, optionsValue, { expires: clearCookieTime });
    const isValid = regex.test(optionsValue);
    if (isValid && required) {
      setSelectFieldValid(true);
    } else if (!isValid && required) {
      setSelectFieldValid(false);
    }
    dispatch(
      userSaveData({
        elemId,
        id,
        value: optionsValue,
        isRequired: required,
      })
    );
  }, [optionsValue]);
  return (
    <>
      <Label {...theme}>{label}</Label>
      <Select
        {...theme}
        isValid={isSelectFieldValid}
        isTouched={isSelectFieldTouched}
        value={optionsValue}
        onChange={(e) => setOptionsValue(e.target.value)}
        onFocus={() => setSelectFieldTouched(true)}
      >
        {elem.options.map((obj, i) => {
          return (
            <option key={i} value={obj.value}>
              {obj.text}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default SelectField;
