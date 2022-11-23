import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
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
    },

    [logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
    },

    [fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
    },
  },
});
const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
export const persistAuthReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
