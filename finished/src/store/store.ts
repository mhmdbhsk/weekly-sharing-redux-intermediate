import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const logger = createLogger({ collapsed: true });
const combinedReducer = combineReducers({});

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend([thunk]).concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  });

  (store as any).persistor = persistStore(store);

  return store;
};

const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => {
  useDispatch<AppDispatch>();
};

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
