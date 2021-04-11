import React, { useContext, useState, useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch } from 'react-redux';
import { userSaveData } from '../../features/userDataSlice';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import setTimeForCookies from '../../utils/setTimeForCookies';

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
  const { id: elemId, label, component, validation, required, value } = elem;
  const [dateSelected, setDate] = useState(
    () => Cookies.get(`${elemId}`) || value
  );
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const clearCookieTime = setTimeForCookies();
  console.log(dateSelected);
  useEffect(() => {
    Cookies.set(`${elemId}`, dateSelected, { expires: clearCookieTime });
    dispatch(
      userSaveData({
        elemId,
        id,
        value: dateSelected,
        isRequired: required,
      })
    );
  }, [dateSelected]);
  return (
    <>
      <Label {...theme}>{elem.label}</Label>
      <DatePickerComponent
        value={dateSelected}
        type="date"
        {...theme}
        autoComplete="off"
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
};

export default DatePicker;
