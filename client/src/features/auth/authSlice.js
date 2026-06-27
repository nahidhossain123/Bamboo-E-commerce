import { createSlice } from "@reduxjs/toolkit";
import {
    loginThunk,
    registerThunk,
    logoutThunk,
    getProfileThunk,
} from "./authThunks";

const initialState = {
  user: null,

  isAuthenticated: false,

  loading: false,

  error: null,

  success: null,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    clearError(state) {
      state.error = null;
    },

    clearSuccess(state) {
      state.success = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // Login

      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;

        state.user = action.payload.user;
        state.isAuthenticated = true;
      })

      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Register

      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message;

        state.user = action.payload.user;
        state.isAuthenticated = true;
      })

      .addCase(registerThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Profile

      .addCase(getProfileThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getProfileThunk.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;

        state.isAuthenticated = true;
      })

      .addCase(getProfileThunk.rejected, (state) => {
        state.loading = false;

        state.user = null;

        state.isAuthenticated = false;
      })

      // Logout

      .addCase(logoutThunk.fulfilled, (state) => {
        state.user = null;

        state.isAuthenticated = false;

        state.success = false;
      });
  },
});

export const { clearError, clearSuccess } = authSlice.actions;

export default authSlice.reducer;