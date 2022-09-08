import { createSlice } from "@reduxjs/toolkit";

const initiaAuthlState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "auth",
  initialState: initiaAuthlState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;
