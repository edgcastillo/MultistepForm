import { configureStore } from "@reduxjs/toolkit";
import pageCountReducer from "./features/paginationSlice";
export default configureStore({
  reducer: {
    pageCount: pageCountReducer
  },
  devTools: true
});
