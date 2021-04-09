import { configureStore } from '@reduxjs/toolkit';
import pageCountReducer from './features/paginationSlice';
import userSelectionSlice from './features/userSelectionSlice';
export default configureStore({
  reducer: {
    pageCount: pageCountReducer,
    userSelection: userSelectionSlice,
  },
  devTools: true,
});
