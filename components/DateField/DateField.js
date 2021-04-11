import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
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
`;

const Label = styled.p`
  color: ${({ secondary }) => secondary};
  margin-top: 30px;
`;

const DatePicker = ({ elem, fieldPropValue }) => {
  // props from config
  const { id: elemId, label, component, validation, required, value } = elem;
  const [dateSelected, setDate] = useState(fieldPropValue || value);
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
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
