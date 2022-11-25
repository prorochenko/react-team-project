import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addDay, fetchProduct } from './products-operations';

const productsInitialState = {
  day: {
    date: null,
    productId: null,
    weight: null,
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
      });
  },
});

export const productsReducer = productsSlice.reducer;
