import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import Cookies from 'js-cookie'


export type AccountState = {
  value: [],
}

const initialState: AccountState = {
  value: [],
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      state.value.push(payload);
      Cookies.set('user', state.value[0]?.user.isAdmin);
    },
    logOut: state => {
      state.value = [];
    },
    addToCart: (state, { payload }) => {
      state.value[0]?.user.cart.push(payload);
    }
  }
})

export const {
  logIn,
  logOut,
  addToCart,
} = accountSlice.actions;


export const selectAccount = (state: RootState) => state.account.value;
export default accountSlice.reducer;