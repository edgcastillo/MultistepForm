import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
  name: 'userData',
  initialState: {
    stepErrorsId: '',
    entity: [],
    fieldsWithValue: {},
    userChoice: '',
    errors: [],
    status: null,
    toggleToast: false,
    toastMessage: '',
  },
  reducers: {
    userSaveSelection: (state, { payload }) => {
      state.userChoice = payload.radioValue;
    },
    userSaveData: (state, { payload }) => {
      state.fieldsWithValue[payload.elemId] = payload;
      const newArr = state.entity.filter((field) => {
        return field.elemId !== payload.elemId && field.id === payload.id;
      });
      if (payload.value) {
      }
      newArr.push(payload);
      state.entity = [...newArr];
      const invalidFields = state.entity.filter((field) => {
        return field.isRequired === true && field.isValid === false;
      });
      if (invalidFields.length >= 1) {
        state.status = 'invalid';
        const fieldsWithErrors = { step: invalidFields[0].id, invalidFields };
        state.errors = fieldsWithErrors;
        state.stepErrorsId = payload.id;
      } else if (invalidFields.length === 0 && state.userChoice !== null) {
        state.status = 'valid';
        state.stepErrorsId = '';
      }
    },
    displayToast: (state, { payload }) => {
      state.toggleToast = true;
      state.toastMessage = payload;
    },
    closeToast: (state, action) => {
      state.toggleToast = false;
      state.toastMessage = '';
    },
    clearErrors: (state, action) => {
      state.errors = {};
      state.status = null;
    },
  },
});

export const {
  userSaveData,
  userSaveSelection,
  displayToast,
  closeToast,
  clearErrors,
} = userDataSlice.actions;

export const userDataSelector = (state) => state.userData;
export const userShowToastSelector = (state) => state.userData.toggleToast;
export const userToastMessageSelector = (state) => state.userData.toastMessage;

export default userDataSlice.reducer;
