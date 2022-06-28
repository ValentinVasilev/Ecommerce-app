import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserService } from '../../../../services/user.service';
import type { RootState } from '../../store';
import { ApiStatus } from '../../../../constants/apiStatus';
import { emptyUserObject, UserObject } from '../../../../models/UserModel';

export type UserState = {
  users: UserObject[],
  getAllUsersStatus: ApiStatus,
};

const initialState: UserState = {
  users: [],
  getAllUsersStatus: ApiStatus.None,
}

const userService = new UserService();

export const getAllUsersAction = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const response = await userService.getAllUsers();
    return response.data;
  }
)

export const usersSlice = createSlice({
  name: 'UsersSlice',
  initialState,
  reducers: {},
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


export const selectAllUsers = (state: RootState) => state.users.users;
export default usersSlice.reducer;