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
  user: { username: null, email: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  sid: '',
  refreshToken: '',
  userData: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: {
    [register.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user.name = action.payload.username;
      state.user.email = action.payload.email;
      state.token = action.payload.id;
      state.isLoggedIn = true;
    },

    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;

      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.sid = action.payload.sid;
      state.refreshToken = action.payload.refreshToken;
    },

    [logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      state.sid = '';
      state.refreshToken = '';
    },

    [fetchRefreshToken.pending](state) {
      state.isLoggedIn = true;
    },
    [fetchRefreshToken.fulfilled](state, action) {
      state.refreshToken = action.payload.newRefreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
      state.isRefreshing = true;
    },
    [fetchRefreshToken.rejected](state) {
      state.isLoggedIn = false;
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user.username = action.payload.username;
      state.user.email = action.payload.email;
      state.user.id = action.payload.id;
      state.user.userData = action.payload.userData;
    },

    [fetchCalculatorInfoNotId.fulfilled](state, action) {
      state.user.userData = action.payload;
    },

    [fetchCalculatorInfoById.fulfilled](state, action) {
      state.user.userData = action.payload;
    },
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
