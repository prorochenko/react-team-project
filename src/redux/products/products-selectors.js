// import { createSelector } from '@reduxjs/toolkit';

export const selectProduct = state => state.products.product;
export const selectProductId = state => state.products.product._id;

export const selectAddDayy = state => state.products.day;

export const selectSummary = state => state.products.userDayInfo.daySummary;
