import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from '../../../../services/user.service';
import type { RootState } from '../../store';
import { ApiStatus } from '../../../../constants/apiStatus';
import { emptyUserObject, UserObject } from '../../../../models/UserModel';
import axios from 'axios';

export type UserState = {
  users: UserObject,
  getAllUsersStatus: ApiStatus,
};

const initialState = {
  users: [],
  getAllUsersStatus: ApiStatus.None,
}

const userService = new UserService();

export const getAllUsersAction = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const response = await userService.getAllUsers();
    return response.data;

    // let data = userService.getAllUsers()
    //   .then(data => data)
    //   .then(res => res.data.Users)
    // return data;
  }
)

export const usersSlice = createSlice({
  name: 'UsersSlice',
  initialState,
  reducers: {
    // getAllUsers: (state, action) => {
    //   // let dataRes: any = {};

    //   // const data = axios
    //   //   .get('/api/user/getAll')
    //   //   .then(data => data)
    //   //   .then(res => dataRes = res.data)

    //   state.users = action.payload;
    // }
  },
  extraReducers: builder => {
    builder
      .addCase(getAllUsersAction.pending, state => {
        state.getAllUsersStatus = ApiStatus.Pending
      })
      .addCase(getAllUsersAction.fulfilled, (state, { payload }) => {
        state.getAllUsersStatus = ApiStatus.Success
        state.users = payload;
      })
      .addCase(getAllUsersAction.rejected, (state) => {
        state.getAllUsersStatus = ApiStatus.Rejected
      })
  }
})

// export const {
//   getAllUsers
// } = usersSlice.actions;


export const selectAllUsers = (state: RootState) => state.users;
export default usersSlice.reducer;