import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  registerAPI,
  logoutAPI,
  getProfileAPI,
  resetPasswordAPI,
  verifyOTPAPI,
  forgotPasswordAPI,
} from "./authAPI";

const getError = (error) =>
  error.response?.data?.message || error.message || "Something went wrong";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await loginAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await registerAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "auth/forgotPassword",
  async (data, thunkAPI) => {
    try {
      return await forgotPasswordAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

// Verify OTP
export const verifyOTPThunk = createAsyncThunk(
  "auth/verifyOTP",
  async (data, thunkAPI) => {
    try {
      return await verifyOTPAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "auth/resetPassword",
  async (data, thunkAPI) => {
    try {
      return await resetPasswordAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logoutAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const getProfileThunk = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    try {
      return await getProfileAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);