import {
  Action,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import counterReducer from './features/counter/counterSlice';
import usersReducer from './features/users/usersSlice';
import productsReducer from './features/products/productsSlice';

const reducers = combineReducers({
  counter: counterReducer,
  users: usersReducer,
  products: productsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk]
});

export let persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;