import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginAPI,
  registerAPI,
  logoutAPI,
  getProfileAPI,
} from "./authAPI";

const getError = (error) =>
  error.response?.data?.message || error.message || "Something went wrong";

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      return await loginAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      return await registerAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await logoutAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);

export const getProfile = createAsyncThunk(
  "auth/profile",
  async (_, thunkAPI) => {
    try {
      return await getProfileAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(getError(error));
    }
  }
);