import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';
import { userSaveData } from '../../features/userDataSlice';

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
  const [optionsValue, setOptionsValue] = useState(value);
  useEffect(() => {
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
        value={optionsValue}
        onChange={(e) => setOptionsValue(e.target.value)}
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
