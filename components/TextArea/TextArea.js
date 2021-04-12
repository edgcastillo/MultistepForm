import React, { useContext, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled, { ThemeContext, css } from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { userSaveData } from '../../features/userDataSlice';

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

const TextArea = ({ elem, fieldPropValue }) => {
  // props from config object
  const {
    id: elemId,
    label,
    component,
    maxLength,
    validation,
    required,
    value,
  } = elem;

  const dispatch = useDispatch();

  // use state
  const [isTextAreaFieldValid, setTextAreaFieldValid] = useState(false);
  const [isTextAreaFieldTouched, setTextAreaFieldTouched] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState(fieldPropValue || value);

  // nextjs and theme
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;

  // var utils
  const pattern = validation ? validation : /\S+/;
  const regex = new RegExp(pattern, 'g');

  useEffect(() => {
    const isValid = regex.test(textAreaValue);
    if (isValid && required) {
      setTextAreaFieldValid(true);
    } else if (!isValid && required) {
      setTextAreaFieldValid(false);
    }
    dispatch(
      userSaveData({
        id,
        elemId,
        label,
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

const mapStateToProps = (state, ownProps) => {
  let fieldPropValue;
  if (state.userData && state.userData.fieldsWithValue[ownProps.elem.id]) {
    fieldPropValue = state.userData.fieldsWithValue[ownProps.elem.id].value;
  }
  return {
    fieldPropValue,
  };
};

export default connect(mapStateToProps)(TextArea);
