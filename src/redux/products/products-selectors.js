export const selectProduct = state => state.products?.product;
export const selectProductId = state => state.products.product._id;

export const selectAddDay = state => state.products.day;

export const selectSummary = state => state.products.userDayInfo.daySummary;
export const selectEaten = state =>
  state.products.userDayInfo.day?.eatenProducts;

export const selectDayInfo = state => state.products.userDayInfo.day.id;

export const selectDateCalendar = state => state.products.dateCalendar;
