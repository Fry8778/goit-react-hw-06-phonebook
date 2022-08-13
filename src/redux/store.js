import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import items from './items/itemsReducer';
import filter from './filter/filterReducer';

const persistConfig = {
  key: 'items',
  storage,
  whitelist: ['items'],
};

const contacts = combineReducers({
  items,
  filter,
});

const store = configureStore({
  reducer: {
    contacts: persistReducer(persistConfig, contacts),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistStor = persistStore(store);

export { store, persistStor };