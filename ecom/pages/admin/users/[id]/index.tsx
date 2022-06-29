import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "../../../../utils/app/hooks";
import { getAllUsersAction, selectAllUsers } from "../../../../utils/app/features/users/usersSlice";

const UserInfo = ({ data }: any) => {

  const router = useRouter();

  const usersData = useAppSelector(selectAllUsers)

  const userId = router.query.id

  const [userData, setUserData] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setUserData(usersData.users.Users);
  }, [])

  console.log('userData', userData)

  // let singleUser: any = [];

  // useEffect(() => {
  //   singleUser.push(usersData.users.Users.filter((user: any) => user._id === userId))
  // }, [])

  // console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
  // console.log('userId', userId)
  // console.log('userData ', usersData.users.Users)

  // console.log('single user', singleUser)
  // console.log('############################')

  // useEffect(() => {
  //   setUser(usersData.users.Users?.filter((user: any) => user._id === userId))
  // }, [])

  return (
    <div>
      {userData
        ?.filter((user: any) => user._id === userId)
        ?.map((singleUser: any) => {
          return (
            <div key={singleUser._id}>
              <p>{singleUser._id}</p>
              <p>{singleUser.email}</p>
              <p>{singleUser.createdAt}</p>
            </div>
          )
        })
      }
      {/* {userData?.map((users: any) => {
        return (
          <div key={users._id}>
            <p>{users.email}</p>
          </div>
        )
      })} */}
    </div>
  )
}
export default UserInfo;

