import { createSlice } from '@reduxjs/toolkit';

export const userSelectionSlice = createSlice({
  name: 'userSelection',
  initialState: {
    userChoice: '',
    data: [],
  },
  reducers: {
    userSaveSelection: (state, { payload }) => {
      state.userChoice = payload.value;
    },
    userSaveData: (state, { payload }) => {
      if (payload.value) {
        const { id, elemId, value, isRequired } = payload;
        const arr = state.data.filter((field) => {
          return field.elemId !== payload.elemId;
        });
        arr.push({ id, elemId, value, isRequired });
        state.data = arr;
      }
    },
  },
});

export const { userSaveSelection } = userSelectionSlice.actions;

export const userOptionSelector = (state) => state.userSelection;

export default userSelectionSlice.reducer;
