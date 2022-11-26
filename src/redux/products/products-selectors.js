export const selectProduct = state => state.products.product;
export const selectProductId = state => state.products.product._id;

export const selectAddDayy = state => state.products.day;

export const selectSummary = state => state.products.userDayInfo.daySummary;
export const selectEaten = state =>
  state.products.userDayInfo.day.eatenProducts;
