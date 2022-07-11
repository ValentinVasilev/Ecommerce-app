import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../../store';

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
    },
    logOut: state => {
      state.value = [];
    }
  }
})

export const {
  logIn,
  logOut
} = accountSlice.actions;


export const selectAccount = (state: RootState) => state.account.value;
export default accountSlice.reducer;