import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchProduct, fetchUserInfo } from './products-operations';

const productsInitialState = {
  infoUser: [],
  product: null,
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'prodacts',
  initialState: productsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUserInfo.fulfilled, (state, { payload }) => {
        state.infoUser = payload;
      })
      .addCase(fetchProduct.fulfilled, (state, { payload }) => {
        state.product = payload;
      });
  },
});

export const productsReducer = productsSlice.reducer;
