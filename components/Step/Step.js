import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// Components
import { componentFactory } from '../../utils/componentFactory';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { FormNextButton, FormBackButton } from '../Button/Button';

// Redux Actions and Selectors
import {
  selectPageCount,
  selectBreadcrumbData,
} from '../../features/paginationSlice';
import {
  userOptionSelector,
  saveStepAction,
} from '../../features/userSelectionSlice';

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
  // Redux Selectors
  const breadcrumbData = useSelector(selectBreadcrumbData);
  const userSelection = useSelector(userOptionSelector);
  const count = useSelector(selectPageCount);

  // Data from Redux Selectors
  const { userChoice } = userSelection;
  const { pageCount } = count;

  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { id } = router.query;
  const pageIndex = parseInt(id);
  const nextPage = pageCount === pageIndex ? pageIndex : pageIndex + 1;
  const backPage = pageCount <= 0 ? pageIndex : pageIndex - 1;
  const buttonText =
    pageIndex === parseInt(pageCount) ? 'Complete' : 'Next Step';

  const handleClick = () => {
    if (userChoice) {
      router.push(`/step/${nextPage}`);
    }
  };
  return (
    <MainContentStyles>
      <Breadcrumb activeId={id} data={breadcrumbData} />
      <FormSection>
        <div>
          <StepTracker {...theme}>{`Step ${id}/${pageCount}`}</StepTracker>
          {componentFactory(elem, userChoice)}
        </div>
        <StepActionButtons>
          <Link href={`/step/${backPage}`}>
            <FormBackButton {...theme}>Back</FormBackButton>
          </Link>
          <FormNextButton
            onClick={() => handleClick()}
            background={theme.active}
            color={theme.primary}
          >
            {buttonText}
          </FormNextButton>
        </StepActionButtons>
      </FormSection>
    </MainContentStyles>
  );
};

export default Step;
