import { createSlice } from '@reduxjs/toolkit';
import {
  addDay,
  deleteProductDay,
  fetchProduct,
  getInfoByDay,
} from './products-operations';

const productsInitialState = {
  day: {
    date: null,
    productId: null,
    weight: null,
  },
  userDayInfo: {
    id: null,
    date: null,
    day: { eatenProducts: [] },
    daySummary: {
      date: null,
      kcalLeft: null,
      kcalConsumed: null,
      dailyRate: null,
      percentsOfDailyRate: null,
      userId: null,
      id: null,
    },
  },
  product: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
      })
      .addCase(addDay.fulfilled, (state, { payload }) => {
        if (payload.newDay) {
          state.userDayInfo.day = payload.newDay;
          state.userDayInfo.daySummary = payload.newSummary;
        } else {
          state.userDayInfo = payload;
        }
      })
      .addCase(getInfoByDay.pending, state => {
        state.userDayInfo.day.eatenProducts = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getInfoByDay.fulfilled, (state, { payload }) => {
        if (payload.daySummary) {
          state.userDayInfo.day.eatenProducts = payload.eatenProducts;
          state.userDayInfo.id = payload.id;
          state.userDayInfo.daySummary = payload.daySummary;
        } else {
          state.userDayInfo.daySummary = payload;
        }
      })
      .addCase(getInfoByDay.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteProductDay.fulfilled, (state, { payload }) => {
        const index = state.eatenProducts.findIndex(
          product => product.id === payload.id
        );
        state.eatenProducts.splice(index, 1);
      });
  },
});

export const productsReducer = productsSlice.reducer;
