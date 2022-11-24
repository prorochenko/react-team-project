import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchUserInfo = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/product');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  'product/addProduct',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/contacts', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
