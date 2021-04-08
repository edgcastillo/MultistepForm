import styled from "styled-components";
// TODO: create basebutton and remove repetition.
export const FormNextButton = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 16px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  &:hover {
    cursor: pointer;
  }
`;

export const FormBackButton = styled.button`
  width: 150px;
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 16px;
  background: ${({ background }) => background};
  color: ${({ secondary }) => secondary};
  &:hover {
    cursor: pointer;
  }
`;
