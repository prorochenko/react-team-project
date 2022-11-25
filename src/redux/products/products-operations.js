import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.get('/product', {
        params: { search: product },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addDay = createAsyncThunk(
  'day/addDay',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post('/day', data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);