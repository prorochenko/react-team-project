import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDayInfo } from './summaryApi';

import axios from 'axios';
import { Notify } from 'notiflix';

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
      // throw new Error('Sid NULL');
    } catch (error) {
      // Confirm.show(
      //   'Предупреждение',
      //   `${product} запрещен к употреблению`,
      //   'ок',
      //   { backgroundColor: 'red' }
      // );
      // Notify.warning(`${product} запрещен к употреблению`);
      Notify.warning(
        `Возможно ${product} запрещен к употреблению или не найден`,
        { showOnlyTheLastOne: true }
      );
      console.log(error.message);
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

export const deleteProductDay = createAsyncThunk(
  'day/deleteProductDay',
  async (data, { rejectWithValue }) => {
    try {
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
