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
      // payload to map of fields with values
      state.fieldsWithValue[payload.elemId] = payload;
      // return new array from the state with all the fields except the one being passed as a payload
      const newArr = state.entity.filter((field) => {
        return field.elemId !== payload.elemId && field.id === payload.id;
      });

      // push new updated field to array
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
        state.errors = {};
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
export const userToastMessageSelector = (state) => state.userData.toastMessage;

export default userDataSlice.reducer;
