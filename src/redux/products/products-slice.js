import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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
  showModalDiary: false,
  dateCalendar: null,
};

const actions = [fetchProduct, addDay, getInfoByDay, deleteProductDay];

const productsSlice = createSlice({
  name: 'products',
  initialState: productsInitialState,
  reducers: {
    toggle(state, action) {
      state.showModalDiary = action.payload;
    },
    getDateCalendar(state, action) {
      state.dateCalendar = action.payload;
    },
  },
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
      .addCase(deleteProductDay.fulfilled, (state, { payload }) => {
        const index = state.userDayInfo.day.eatenProducts.findIndex(
          product => product.id === payload.eatenProductId
        );
        state.userDayInfo.day.eatenProducts.splice(index, 1);
        state.userDayInfo.daySummary = payload.result.newDaySummary;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.fulfilled)),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(isAnyOf(...actions.map(action => action.pending)), state => {
        state.isLoading = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(...actions.map(action => action.rejected)),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
          state.product = null;
        }
      );
  },
});

export const productsReducer = productsSlice.reducer;

export const { toggle, getDateCalendar } = productsSlice.actions;
