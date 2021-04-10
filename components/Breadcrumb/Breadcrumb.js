import React, { useContext } from 'react';
import styled, { ThemeContext, css } from 'styled-components';
import { BigCircleStep, SmallCircleStep } from '../Circle/Circle';

const BreadcrumbSection = styled.section`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(${({ rows }) => rows}, 50px);
  gap: 50px;
  border-right: 1px solid ${({ border }) => border};
  margin-right: 50px;
`;

const BreadcrumbElement = styled.div`
  display: grid;
  grid-template-columns: 1fr 100px;
  position: relative;
  margin-top: 35px;
  gap: 20px;
  & > .text-section {
    display: grid;
    grid-template-rows: 1fr 1fr;
    & > h4 {
      justify-self: end;
      color: ${(props) => (props.selected ? props.primary : props.secondary)};
      margin: 0;
    }
    & > p {
      color: ${({ secondary }) => secondary};
      font-size: 13px;
      margin: 3px;
      padding: 0;
      justify-self: end;
    }
  }
  ${(props) =>
    props.isNotFirst &&
    css`
      &:before {
        content: '';
        width: 0;
        height: 48px;
        position: absolute;
        border: 1px solid ${({ border }) => border};
        top: -50px;
        left: 222px;
        z-index: 0;
      }
    `}

  & > .circle-section {
    z-index: 1;
  }

  & > .small-circle-section {
    position: absolute;
    left: 293px;
    top: 15px;
  }
`;

const Breadcrumb = ({ activeId, data }) => {
  const theme = useContext(ThemeContext);
  if (data) {
    const rows = data.length;
    return (
      <BreadcrumbSection {...theme} rows={rows}>
        {data.map((step, i) => {
          const active = step.step === parseInt(activeId);
          const isNotFirst = i !== 0;
          return (
            <BreadcrumbElement
              key={i}
              {...theme}
              selected={active}
              isNotFirst={isNotFirst}
            >
              <div className="text-section">
                <h4>{step.text}</h4>
                <p>{step.subtext}</p>
              </div>
              <div className="circle-section">
                <BigCircleStep activeStep={active} link={step.id} />
              </div>
              <div className="small-circle-section">
                <SmallCircleStep activeStep={active} link={step.id} />
              </div>
            </BreadcrumbElement>
          );
        })}
      </BreadcrumbSection>
    );
  }
  return null;
};

export default Breadcrumb;
