import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';
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

const testPersistConfig = {
  key: 'test',
  storage,
};
//modal
export const toggle = createAction('showModal, toggle');

const modalReducer = createReducer(false, {
  [toggle]: (state, action) => !state,
});

//modal
export const store = configureStore({
  reducer: {
    showModal: modalReducer,
    test: persistReducer(testPersistConfig, () => {
      return null;
    }),

    auth: persistAuthReducer,
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
