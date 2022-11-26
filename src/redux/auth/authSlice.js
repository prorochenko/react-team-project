import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchRefreshToken,
  fetchCurrentUser,
  fetchCalculatorInfoNotId,
  fetchCalculatorInfoById,
} from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { username: null, email: null, id: null, userData: {} },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  sid: '',
  refreshToken: '',
  isRegister: false,

  showModal: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggle(state, action) {
      state.showModal = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user.name = action.payload.username;
        state.user.email = action.payload.email;
        state.token = action.payload.id;
        state.isLoggedIn = false;
        state.isRegister = true;
      })

      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;

        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.sid = action.payload.sid;
        state.refreshToken = action.payload.refreshToken;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = initialState.user;
        state.token = null;
        state.isLoggedIn = false;
        state.sid = '';
        state.refreshToken = '';
      })

      .addCase(fetchRefreshToken.pending, state => {
        state.isLoggedIn = true;
      })
      .addCase(fetchRefreshToken.fulfilled, (state, action) => {
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.sid;
        state.isLoggedIn = true;
        state.isRefreshing = true;
      })
      .addCase(fetchRefreshToken.rejected, state => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user.username = action.payload.username;
        state.user.email = action.payload.email;
        state.user.id = action.payload.id;
        state.user.userData = action.payload.userData;
      })

      .addCase(fetchCalculatorInfoNotId.fulfilled, (state, action) => {
        state.user.userData = action.payload;
        state.showModal = true;
      })

      .addCase(fetchCalculatorInfoById.fulfilled, (state, action) => {
        state.user.userData = action.payload;
        state.showModal = true;
      });
  },
});

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['sid', 'refreshToken'],
};
export const persistAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);

export const { toggle } = authSlice.actions;
