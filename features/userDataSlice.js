import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    entitity: [],
    userChoice: '',
    status: null,
  },
  reducers: {
    userSaveSelection: (state, { payload }) => {
      state.userChoice = payload.value;
    },
    userSaveData: (state, { payload }) => {
      const newArr = state.entitity.filter((field) => {
        return field.elemId !== payload.elemId;
      });
      newArr.push(payload);
      state.entitity = newArr;
      const isAllValid = state.entitity.filter((field) => {
        return field.isRequired === true && field.value === '';
      });
      if (isAllValid.length >= 1) {
        state.status = 'invalid';
      } else if (isAllValid.length === 0 && state.userChoice !== null) {
        state.status = 'valid';
      }
    },
    validateData: (state, action) => {
      const isAllValid = state.entitity.filter((field) => {
        return field.isRequired === true && field.value === '';
      });
      if (isAllValid.length >= 1) {
        state.status = 'invalid';
      } else if (isAllValid.length === 0 && state.userChoice !== null) {
        console.log('here', state.userChoice);
        state.status = 'valid';
      }
    },
  },
});

export const {
  userSaveData,
  validateData,
  userSaveSelection,
} = userDataSlice.actions;

export const userDataSelector = (state) => state.userData;

export default userDataSlice.reducer;
