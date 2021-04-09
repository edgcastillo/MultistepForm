import { createSlice } from '@reduxjs/toolkit';

export const pageCountSlice = createSlice({
  name: 'pageCount',
  initialState: {},
  reducers: {
    pageCount: (state, { payload }) => {
      state.pageCount = payload.pages;
      state.breadcrumbData = payload.stepsData;
      state.currentStep = payload.currentStep;
    },
  },
});

export const { pageCount } = pageCountSlice.actions;

export const selectPageCount = (state) => state.pageCount;
export const selectBreadcrumbData = (state) => state.pageCount.breadcrumbData;
export const selectCurrentPage = (state) => state.pageCount;

export default pageCountSlice.reducer;
