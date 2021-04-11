import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    stepErrorsId: '',
    entitity: [],
    userChoice: '',
    errors: [],
    status: null,
    toggleToast: false,
  },
  reducers: {
    userSaveSelection: (state, { payload }) => {
      state.userChoice = payload.radioValue;
    },
    userSaveData: (state, { payload }) => {
      const newArr = state.entitity.filter((field) => {
        return field.elemId !== payload.elemId;
      });
      newArr.push(payload);
      state.entitity = [...newArr];
      const invalidFields = state.entitity.filter((field) => {
        return field.isRequired === true && field.isValid === false;
      });
      if (invalidFields.length >= 1) {
        state.status = 'invalid';
        state.errors = invalidFields;
        state.stepErrorsId = payload.id;
      } else if (invalidFields.length === 0 && state.userChoice !== null) {
        state.status = 'valid';
        state.stepErrorsId = '';
      }
    },
    displayToast: (state, action) => {
      state.toggleToast = true;
    },
    closeToast: (state, action) => {
      state.toggleToast = false;
    },
  },
});

export const {
  userSaveData,
  userSaveSelection,
  displayToast,
  closeToast,
} = userDataSlice.actions;

export const userDataSelector = (state) => state.userData;
export const userShowToastSelector = (state) => state.userData.toggleToast;

export default userDataSlice.reducer;
