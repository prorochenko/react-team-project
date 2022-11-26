import { createSlice } from '@reduxjs/toolkit';
import { addDay, fetchProduct, getInfoByDay } from './products-operations';

const productsInitialState = {
  day: {
    date: null,
    productId: null,
    weight: null,
  },
  userDayInfo: {
    id: null,
    eatenProduct: null,
    date: null,
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
  name: 'prodacts',
  initialState: productsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
      })
      .addCase(addDay.fulfilled, (state, { payload }) => {
        state.day = payload;
      })
      .addCase(getInfoByDay.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getInfoByDay.fulfilled, (state, { payload }) => {
        if (payload.daySummary) {
          state.userDayInfo = payload;
        } else {
          state.userDayInfo.daySummary = payload;
        }
      })
      .addCase(getInfoByDay.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
