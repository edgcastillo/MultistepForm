import { createSlice } from '@reduxjs/toolkit';

export const userSelectionSlice = createSlice({
  name: 'userSelection',
  initialState: {},
  reducers: {
    userStepOption: (state, { payload }) => {
      state[payload.step] = payload.value;
      state.userChoice = payload.value;
    },
    saveStepAction: (state, { payload }) => {
      state[payload.step] = {};
    },
  },
});

export const { userStepOption, saveStepAction } = userSelectionSlice.actions;

export const userOptionSelector = (state) => state.userSelection;

export default userSelectionSlice.reducer;
