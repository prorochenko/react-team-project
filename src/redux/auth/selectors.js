export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectRefreshToken = state => state.auth.refreshToken;
export const selectUserId = state => state.auth.user.id;

export const selectUserData = state => state.user.selectUserData;
