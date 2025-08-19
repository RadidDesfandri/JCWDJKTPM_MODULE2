import { createSlice } from "@reduxjs/toolkit";

interface InitialStateType {
  isLoggedin: boolean;
  user: {
    email: string | null;
  };
}

const initialState: InitialStateType = {
  isLoggedin: false,
  user: {
    email: null,
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedin = true;
      state.user = { email: action.payload };
    },
    logout: (state) => {
      state.isLoggedin = false;
      state.user = { email: null };
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
