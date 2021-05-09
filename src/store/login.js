import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: +localStorage.getItem('isLoggedIn'),
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = 1;
    },
    logout(state) {
      state.isLoggedIn = 0;
    },
  },
});

export const login = () => {
  return (dispatch) => {
    localStorage.setItem('isLoggedIn', '1');
    dispatch(loginActions.login());
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('isLoggedIn');
    dispatch(loginActions.logout());
  };
};

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
