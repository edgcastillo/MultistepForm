import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

// Components
import { componentFactory } from '../../utils/componentFactory';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import BreadcrumbMobile from '../Breadcrumb/BreadcrumbMobile';
import { FormNextButton, FormBackButton } from '../Button/Button';
import { devices } from '../MediaQueries';

// Redux Actions and Selectors
import {
  selectPageCount,
  selectBreadcrumbData,
} from '../../features/paginationSlice';
import {
  userDataSelector,
  displayToast,
  clearErrors,
} from '../../features/userDataSlice';

const MainContentStyles = styled.main`
  display: grid;
  position: relative;
  grid-template-columns: 1fr;

  & > .breadcrumb-desktop {
    display: none;
  }

  @media ${devices.laptop} {
    grid-template-columns: 350px 1fr;
    & > .breadcrumb-desktop {
      display: block;
    }
    & > .breadcrumb-mobile {
      display: none;
    }
  }
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
  const dispatch = useDispatch();
  // Redux Selectors
  const breadcrumbData = useSelector(selectBreadcrumbData);
  const selection = useSelector(userDataSelector);
  const userData = useSelector(userDataSelector);
  const count = useSelector(selectPageCount);

  // Data from Redux Selectors
  const { userChoice } = selection;
  const { pageCount } = count;

  // NextJS
  const router = useRouter();
  const { id } = router.query;

  // Variables
  const pageIndex = parseInt(id);
  const theme = useContext(ThemeContext);
  const nextPage = pageCount === pageIndex ? pageIndex : pageIndex + 1;
  const backPage = pageCount <= 0 ? pageIndex : pageIndex - 1;
  const buttonText =
    pageIndex === parseInt(pageCount) ? 'Complete' : 'Next Step';

  const handleClickNext = () => {
    if (
      (userChoice && pageIndex === 1) ||
      (userData.status === 'valid' && pageIndex !== pageCount)
    ) {
      dispatch(clearErrors());
      router.push(`/step/${nextPage}`);
    } else {
      const message =
        pageIndex === 1 ? 'Please make a selection' : 'Fields required: ';
      dispatch(displayToast(message));
    }
  };
  const handleClickBack = () => {
    router.push(`/step/${backPage}`);
  };
  return (
    <>
      <MainContentStyles>
        <div className="breadcrumb-desktop">
          <Breadcrumb activeId={id} data={breadcrumbData} />
        </div>
        <div className="breadcrumb-mobile">
          <BreadcrumbMobile activeId={id} data={breadcrumbData} />
        </div>

        <FormSection>
          <div>
            <StepTracker {...theme}>{`Step ${id}/${pageCount}`}</StepTracker>
            {componentFactory(elem, userChoice)}
          </div>
          <StepActionButtons>
            <FormBackButton
              {...theme}
              onClick={() => handleClickBack()}
              disabled={pageIndex === 1}
            >
              Back
            </FormBackButton>

            <FormNextButton
              onClick={() => handleClickNext()}
              background={theme.active}
              color={theme.primary}
            >
              {buttonText}
            </FormNextButton>
          </StepActionButtons>
        </FormSection>
      </MainContentStyles>
    </>
  );
};

export default Step;
