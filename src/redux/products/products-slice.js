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
    date: null,
    day: { eatenProducts: [], id: null },
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
          state.userDayInfo.day.id = payload.id;
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
        const index = state.userDayInfo.day.eatenProducts.findIndex(
          product => product.id === payload.eatenProductId
        );
        state.userDayInfo.day.eatenProducts.splice(index, 1);
        state.userDayInfo.daySummary = payload.result.newDaySummary;
      });
  },
});

export const productsReducer = productsSlice.reducer;
