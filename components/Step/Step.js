import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

// Utils, Selectors and Button
import { componentFactory } from "../../utils/componentFactory";
import {
  selectPageCount,
  selectBreadcrumbData
} from "../../features/paginationSlice";
import { FormNextButton, FormBackButton } from "../Button/Button";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const MainContentStyles = styled.main`
  display: grid;
  grid-template-columns: 350px 1fr;
`;

const FormSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 100px;
  margin-top: 35px;
`;

const StepTracker = styled.p`
  font-weight: 200;
  margin-top: 0;
  color: ${({ secondary }) => secondary};
`;

const StepActionButtons = styled.div`
  align-self: end;
  justify-self: end;
`;

const Step = ({ elem }) => {
  const theme = useContext(ThemeContext);
  const count = useSelector(selectPageCount);
  const breadcrumbData = useSelector(selectBreadcrumbData);
  const router = useRouter();
  const { id } = router.query;
  const pageIndex = parseInt(id);
  const { pageCount } = count;
  // TODO: add some validation/control to avoid user going over to non-existent steps
  const nextPage = pageIndex + 1;
  const backPage = pageIndex - 1;
  const buttonText =
    pageIndex === parseInt(pageCount) ? "Complete" : "Next Step";
  return (
    <MainContentStyles>
      <Breadcrumb activeId={id} data={breadcrumbData} />
      <FormSection>
        <div>
          <StepTracker {...theme}>{`Step ${id}/${pageCount}`}</StepTracker>
          {componentFactory(elem)}
        </div>
        <StepActionButtons>
          <Link href={`/step/${backPage}`}>
            <FormBackButton {...theme}>Back</FormBackButton>
          </Link>
          <Link href={`/step/${nextPage}`}>
            <FormNextButton background={theme.active} color={theme.primary}>
              {buttonText}
            </FormNextButton>
          </Link>
        </StepActionButtons>
      </FormSection>
    </MainContentStyles>
  );
};

export default Step;
