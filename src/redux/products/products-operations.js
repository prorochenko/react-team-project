import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDayDelete, axiosDayInfo } from './summaryApi';

import axios from 'axios';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (product, thunkAPI) => {
    try {
      const response = await axios.get('/product', {
        params: { search: product },
      });
      // console.log(response.data);
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
      // console.log(data);
      const response = await axios.post('/day', data);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProductDay = createAsyncThunk(
  'day/deleteProductDay',
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const response = await axios.delete('/day', data);
      // console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getInfoByDay = createAsyncThunk(
  'day/info',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axiosDayInfo(date);
      // console.log(result);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
