import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Component } from './ComponentMap';

import Header from '../Header/Header';
import { devices } from '../MediaQueries';

const TemplateStyles = styled.div`
  height: auto;
  width: 700px;
  overflow: hidden;
  border-radius: 25px;
  background: ${({ background }) => background};

  @media ${devices.laptop} {
    width: 900px;
  }

  @media ${devices.desktop} {
    width: 1200px;
  }
`;

const ContentStyles = styled.div`
  height: inherit;
  padding: 50px;

  @media ${devices.desktop} {
    padding: 100px;
  }
`;

const Template = ({ header, config }) => {
  const theme = useContext(ThemeContext);
  if (config) {
    return (
      <TemplateStyles {...theme}>
        <ContentStyles>
          <Header elem={header} />
          <Component {...config} />
        </ContentStyles>
      </TemplateStyles>
    );
  }
  return null;
};

export default Template;
