import { createSlice } from '@reduxjs/toolkit';

export const userSelectionSlice = createSlice({
  name: 'userSelection',
  initialState: {
    userChoice: '',
  },
  reducers: {
    userSaveSelection: (state, { payload }) => {
      state.userChoice = payload.value;
    },
  },
});

export const { userSaveSelection } = userSelectionSlice.actions;

export const userOptionSelector = (state) => state.userSelection;

export default userSelectionSlice.reducer;
