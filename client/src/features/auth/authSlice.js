import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  logout,
  getProfile,
} from "./authThunks";

const initialState = {
  user: null,

  isAuthenticated: false,

  loading: false,

  error: null,

  success: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    clearError(state) {
      state.error = null;
    },

    clearSuccess(state) {
      state.success = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // Login

      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.user = action.payload.user;
        state.isAuthenticated = true;
      })

      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register

      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;

        state.user = action.payload.user;
        state.isAuthenticated = true;
      })

      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Profile

      .addCase(getProfile.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;

        state.isAuthenticated = true;
      })

      .addCase(getProfile.rejected, (state) => {
        state.loading = false;

        state.user = null;

        state.isAuthenticated = false;
      })

      // Logout

      .addCase(logout.fulfilled, (state) => {
        state.user = null;

        state.isAuthenticated = false;

        state.success = false;
      });
  },
});

export const { clearError, clearSuccess } = authSlice.actions;

export default authSlice.reducer;