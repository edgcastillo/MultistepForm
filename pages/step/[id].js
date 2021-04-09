import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { pageCount } from '../../features/paginationSlice';
import { useRouter } from 'next/router';
import Template from '../../components/Template/Template';
import { data } from '../../config/data';

const Step = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const stepIndex = parseInt(id) - 1;
  useEffect(() => {
    const pages = data.content.steps.length;
    dispatch(
      pageCount({
        pages: pages,
        stepsData: data.content.breadcrumb,
      })
    );
  }, []);
  return (
    <Template
      header={data.content.header}
      config={data.content.steps[stepIndex]}
    />
  );
};

export default Step;
