import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  isLoading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    toggleIsLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
