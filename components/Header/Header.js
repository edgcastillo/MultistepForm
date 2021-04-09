import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const HeaderStyles = styled.header`
  padding-bottom: 25px;
  border-bottom: 2px solid ${({ border }) => border};
`;

const Title = styled.h2`
  color: ${({ primary }) => primary};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

const SubTitle = styled.p`
  color: ${({ secondary }) => secondary};
`;

const Header = ({ elem }) => {
  const theme = useContext(ThemeContext);
  const { title, subtitle } = elem;
  return (
    <HeaderStyles {...theme}>
      <Title {...theme}>{title}</Title>
      {subtitle && <SubTitle {...theme}>{subtitle}</SubTitle>}
    </HeaderStyles>
  );
};

export default Header;
