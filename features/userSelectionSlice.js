import { createSlice } from '@reduxjs/toolkit';

export const userSelectionSlice = createSlice({
  name: 'userSelection',
  initialState: {
    userChoice: '',
    data: [],
  },
  reducers: {
    userStepOption: (state, { payload }) => {
      if (payload.value) {
        state.data.push({ id: payload.step, value: payload.value });
      }
      state.userChoice = payload.value;
    },
    saveStepAction: (state, { payload }) => {
      state[payload.step] = {};
    },
  },
});

export const { userStepOption } = userSelectionSlice.actions;

export const userOptionSelector = (state) => state.userSelection;

export default userSelectionSlice.reducer;
