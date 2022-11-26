import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { persistAuthReducer } from './auth/authSlice';
import { productsReducer } from './products/products-slice';

const testPersistConfig = {
  key: 'test',
  storage,
  whitelist: ['token'],
};
//modal
// export const toggle = createAction('showModal, toggle');

// const modalReducer = createReducer(false, {
//   [toggle]: (state, action) => !state,
// });

//modal
export const store = configureStore({
  reducer: {
    // showModal: modalReducer,
    test: persistReducer(testPersistConfig, () => {
      return null;
    }),

    auth: persistAuthReducer,
    products: productsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
