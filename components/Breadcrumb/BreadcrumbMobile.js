import React, { useContext } from 'react';
import styled, { ThemeContext, css } from 'styled-components';
import { SmallCircleStep } from '../Circle/Circle';

const BreadcrumbMobileSection = styled.div`
  display: grid;
  position: absolute;
  top: -7px;
  grid-template-columns: repeat(${({ rows }) => rows}, 50px);
  z-index: 1;
`;

const BreadcrumbMobile = ({ activeId, data }) => {
  const theme = useContext(ThemeContext);
  if (data) {
    const rows = data.length;
    return (
      <BreadcrumbMobileSection rows={rows}>
        {data.map((step, i) => {
          const active = step.step === parseInt(activeId);
          return <SmallCircleStep key={i} {...theme} activeStep={active} />;
        })}
      </BreadcrumbMobileSection>
    );
  }
  return null;
};

export default BreadcrumbMobile;
