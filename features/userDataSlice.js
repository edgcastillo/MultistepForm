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
      state.userChoice = payload.radioValue;
    },
    userSaveData: (state, { payload }) => {
      const newArr = state.entitity.filter((field) => {
        return field.elemId !== payload.elemId;
      });
      newArr.push(payload);
      state.entitity = [...newArr];

      // const arr = state.entitity;
      // state.entitity = arr.splice(index, 1, payload);
      // const { id } = payload;
      // const [id] = payload;
      // console.log(payload);
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
