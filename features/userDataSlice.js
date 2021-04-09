import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    entitity: [],
    status: null,
  },
  reducers: {
    userSaveData: (state, { payload }) => {
      const newArr = state.entitity.filter((field) => {
        return field.elemId !== payload.elemId;
      });
      newArr.push(payload);
      state.entitity = newArr;
    },
    validateData: (state, action) => {
      const isAllValid = state.entitity.filter((field) => {
        return field.isRequired === true && field.value === '';
      });
      if (isAllValid.length >= 1) {
        state.status = 'invalid';
      } else {
        state.status = 'valid';
      }
    },
  },
});

export const { userSaveData, validateData } = userDataSlice.actions;

export const userDataSelector = (state) => state.userData;

export default userDataSlice.reducer;
