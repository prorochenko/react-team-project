import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosDayInfo } from './summaryApi';

export const getInfoByDay = createAsyncThunk(
  'day/info',
  async (date, { rejectWithValue }) => {
    try {
      const result = await axiosDayInfo(date);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  }
);
