import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDayInfo } from './summaryApi';

import axios from 'axios';
import Notiflix, { Notify } from 'notiflix';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

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
      // Confirm.show(
      //   'Предупреждение',
      //   `${product} запрещен к употреблению`,
      //   'ок',
      //   { backgroundColor: 'red' }
      // );
      // Notify.warning(`${product} запрещен к употреблению`);
      Notify.warning(
        `Возможно ${product} запрещен к употреблению или не найден`
      );
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
      console.log({ data });
      // const eatenProductId = data.eatenProductId;
      const result = await axios.delete('/day', { data });
      // console.log({ result: result.data, eatenProductId: data.eatenProductId });
      return { result: result.data, eatenProductId: data.eatenProductId };
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
