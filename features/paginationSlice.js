import { createSlice } from "@reduxjs/toolkit";

export const pageCountSlice = createSlice({
  name: "pageCount",
  initialState: {},
  reducers: {
    pageCount: (state, { payload }) => {
      state.pageCount = payload.pages;
      state.breadcrumbData = payload.stepsData;
    }
  }
});

export const { pageCount } = pageCountSlice.actions;
export const selectPageCount = (state) => state.pageCount;
export const selectBreadcrumbData = (state) => state.pageCount.breadcrumbData;

export default pageCountSlice.reducer;
