import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// REGISTRATION
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, e, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);
      Notify.success(`Registration was successful!`);

      return response.data;
    } catch (error) {
      Notify.failure('Ups, invalid data!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// LOGIN
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      Notify.success(`Successful authorization!`);
      token.set(response.data.accessToken);
      return response.data;
    } catch (error) {
      Notify.failure('Ups, invalid data!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// LOGOUT
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.post('/users/logout');
    token.unset();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// USER INFO
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const tokenLocal = thunkAPI.getState().auth.token;
    try {
      if (tokenLocal) {
        token.set(tokenLocal);
        const response = await axios.get('/users/current');
        return response.data;
      }
      throw new Error('Token NULL');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
