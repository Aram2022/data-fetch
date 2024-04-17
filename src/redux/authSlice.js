import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isAuthenticated: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUserSuccess(state, action) {
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;
        },
        loginUserFailure(state, action) {
            state.user = null;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
    },
});

export const { loginUserSuccess, loginUserFailure } = authSlice.actions;

export default authSlice.reducer;

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/login", { email, password });
      const user = response.data; 
      dispatch(loginUserSuccess(user));
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
  };

export const registerUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.post("/api/register", { email, password });
      const user = response.data; 
      dispatch(loginUserSuccess(user));
    } catch (error) {
      dispatch(loginUserFailure(error.message));
    }
  };