import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeContext, css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { userSaveData } from '../../features/userDataSlice';
import { useRouter } from 'next/router';

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

const DatePicker = ({ elem, fieldPropValue }) => {
  const dispatch = useDispatch();
  // props from config
  const { id: elemId, label, component, validation, required, value } = elem;

  // use state
  const [dateSelected, setDate] = useState(fieldPropValue || value);
  const [isDateFieldValid, setDateFieldValid] = useState(false);
  const [isDateFieldTouched, setDateFieldTouched] = useState(false);

  const theme = useContext(ThemeContext);

  // nextjs
  const router = useRouter();
  const { id } = router.query;

  // regex
  // just checking for empty date for now
  const pattern = /\S+/;
  const regex = new RegExp(pattern, 'g');

  useEffect(() => {
    const isValid = regex.test(dateSelected);
    if (isValid && required) {
      setDateFieldValid(true);
    } else if (!isValid && required) {
      setDateFieldValid(false);
    }
    dispatch(
      userSaveData({
        id,
        elemId,
        label,
        isValid,
        value: dateSelected,
        isRequired: required,
      })
    );
  }, [dateSelected]);
  return (
    <>
      <Label {...theme}>{elem.label}</Label>
      <DatePickerComponent
        isValid={isDateFieldValid}
        isTouched={isDateFieldTouched}
        value={dateSelected}
        type="date"
        {...theme}
        autoComplete="off"
        onChange={(e) => setDate(e.target.value)}
        onFocus={() => setDateFieldTouched(true)}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  let fieldPropValue;
  if (state.userData && state.userData.fieldsWithValue[ownProps.elem.id]) {
    fieldPropValue = state.userData.fieldsWithValue[ownProps.elem.id].value;
  }
  return {
    fieldPropValue,
  };
};

export default connect(mapStateToProps)(DatePicker);
