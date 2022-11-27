import axios from 'axios';
// import { useDispatch } from 'react-redux';
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
    const response = await axios.post('/auth/logout');
    token.unset();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// USER INFO
export const fetchCurrentUser = createAsyncThunk(
  'auth/user',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedSid = state.auth.sid;
    try {
      if (persistedSid === '') {
        throw new Error('Sid NULL');
      }
      const response = await axios.get('/user');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//refreshtoken
export const fetchRefreshToken = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedSid = state.auth.sid;
    const persistedToken = state.auth.refreshToken;

    try {
      if (persistedSid) {
        token.set(persistedToken);
        const response = await axios.post('/auth/refresh', {
          sid: persistedSid,
        });
        token.set(response.data.newAccessToken);

        return response.data;
      }
      throw new Error('Sid NULL');
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// USER INFO
export const fetchCalculatorInfoNotId = createAsyncThunk(
  'auth/daily-rate',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/daily-rate', {
        height: +credentials.height,
        age: +credentials.age,
        weight: +credentials.weight,
        desiredWeight: +credentials.desiredWeight,
        bloodType: +credentials.bloodType,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCalculatorInfoById = createAsyncThunk(
  'auth/daily-rate/id',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(`/daily-rate/${credentials.userId}`, {
        height: +credentials.height,
        age: +credentials.age,
        weight: +credentials.weight,
        desiredWeight: +credentials.desiredWeight,
        bloodType: +credentials.bloodType,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
