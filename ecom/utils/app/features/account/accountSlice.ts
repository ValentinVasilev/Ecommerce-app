import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import Cookies from 'js-cookie'


export type AccountState = {
  value: any[],
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
      Cookies.set('user', state.value[0]?.user.token);
    },
    logOut: state => {
      state.value = [];
    },
    addToCart: (state, { payload }) => {
      state.value[0]?.user.cart.push(payload);
    },
    // removeFromCart: (state, { payload }) => {

    //   // let itemId = payload;

    //   // let cart = state.value
    //   // let indexOfItem = state.value[0].user.cart.findIndex((i: any) => i.id === itemId);

    //   // let newCartLength = [...state.value[0].user.cart];

    //   // newCartLength.splice(indexOfItem, 1);

    //   // console.log('THE CART', cart)

    // },
    updateUser: (state, { payload }) => {
      state.value = [];
      state.value.push(payload);
    }
  }
})

export const {
  logIn,
  logOut,
  addToCart,
  updateUser,
  // removeFromCart,
} = accountSlice.actions;


export const selectAccount = (state: RootState) => state.account.value;
export default accountSlice.reducer;