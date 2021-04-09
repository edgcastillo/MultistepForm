import { configureStore } from '@reduxjs/toolkit';
import pageCountReducer from './features/paginationSlice';
import userSelectionSlice from './features/userSelectionSlice';
import userDataSlice from './features/userDataSlice';
export default configureStore({
  reducer: {
    pageCount: pageCountReducer,
    userSelection: userSelectionSlice,
    userData: userDataSlice,
  },
  devTools: true,
});
