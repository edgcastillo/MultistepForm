import { configureStore } from '@reduxjs/toolkit';
import pageCountReducer from './features/paginationSlice';
import userDataSlice from './features/userDataSlice';
export default configureStore({
  reducer: {
    pageCount: pageCountReducer,
    userData: userDataSlice,
  },
  devTools: true,
});
