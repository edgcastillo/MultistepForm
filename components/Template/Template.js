import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Component } from './ComponentMap';

import Header from '../Header/Header';
import { devices } from '../MediaQueries';

const TemplateStyles = styled.div`
  width: 1200px;
  height: auto;
  overflow: hidden;
  border-radius: 25px;
  background: ${({ background }) => background};

  @media ${devices.large} {
    width: 900px;
  }

  @media ${devices.medium} {
    width: 700px;
  }
`;

const ContentStyles = styled.div`
  height: inherit;
  padding: 100px;

  @media ${devices.large} {
    padding: 50px;
  }

  @media ${devices.medium} {
    padding: 40px;
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
