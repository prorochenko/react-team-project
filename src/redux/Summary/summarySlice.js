import { createSlice } from '@reduxjs/toolkit';
import { getInfoByDay } from './summaryOperations';

const initialState = {
  daySummary: {
    kcalLeft: null,
    kcalConsumed: null,
    dailyRate: null,
    percentsOfDailyRate: null,
  },
  loading: false,
  error: null,
};

const daySlice = createSlice({
  name: 'day',
  initialState,
  //
  extraReducers: {
    [getInfoByDay.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [getInfoByDay.fulfilled]: (state, action, { payload }) => {
      state.loading = false;
      state.daySummary = action.payload.daySummary;
      //   state.daySummary.kcalConsumed = action.payload.daySummary.kcalConsumed;
      //   state.daySummary.kcalLeft = action.payload.daySummary.kcalLeft;
      //   state.daySummary.percentsOfDailyRate =
      //     action.payload.daySummary.percentsOfDailyRate;
    },
    [getInfoByDay.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default daySlice.reducer;
