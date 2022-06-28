import React, { useEffect, useState } from "react";
import AdminTabs from "../../components/sub-components/admin-tabs.component";
import axios from "axios";
import styles from '../../styles/admin/home.module.scss';
import { useAppSelector, useAppDispatch } from "../../utils/app/hooks";
import { ApiStatus } from "../../constants/apiStatus";
import { selectAllUsers, getAllUsersAction } from '../../utils/app/features/users/usersSlice';
import { UserObject } from "../../models/UserModel";
import { UserService } from "../../services/user.service";

const Home = () => {

  const [productsCount, setProductsCount] = useState();
  const [usersCount, setUsersCount] = useState();
  const [allUsers, setAllUsers] = useState<any>();
  const [usersList, setUsersList] = useState<any>();

  const dispatch = useAppDispatch();
  const userService = new UserService();

  const { getAllUsersStatus, users } = useAppSelector(selectAllUsers)

  useEffect(() => {
    // const data = axios
    //   .get('/api/user/getAll')
    //   .then(data => data)
    //   .then(res => setAllUsers(res.data.Users))

    // dispatch(getAllUsers(allUsers))
    // userService.getAllUsers()
    //   .then(data => data)
    //   .then(res => console.log(res.data.Users))
    // const test = dispatch(getAllUsersAction());
    // const data1 = dispatch(getAllUsersAction())
    // let data2 = data1.then(data => data).then(res => res)
    // const test = dispatch(getAllUsers());
    dispatch(getAllUsersAction())
  }, [])


  const setInitialState = () => {
    setUsersList(users.Users)
  }

  useEffect(() => {
    if (getAllUsersStatus === ApiStatus.Success) {
      setInitialState()
    }

  }, [getAllUsersStatus])

  console.log('UsersList', usersList)

  // console.log(usersList)
  // console.log(dispatch(getAllUsers()))
  // const { getAllUsersStatus, users } = useAppSelector(selectAllUsers)

  // const setInitialState = () => {
  //   setAllUsers(users);
  // }


  // useEffect(() => {
  //   dispatch(getAllUsersAction)
  // }, [])

  // useEffect(() => {
  //   if (getAllUsersStatus === ApiStatus.Success) {
  //     setInitialState();
  //   }
  //   console.log('USERS', allUsers)
  // }, [getAllUsersStatus])

  useEffect(() => {
    axios.get('/api/products/getAll')
      .then(data => data)
      .then(prod => {
        setProductsCount(prod.data);
      })
  }, [])

  useEffect(() => {
    axios.get('/api/user/count')
      .then(data => data)
      .then(prod => {
        setUsersCount(prod.data);
      })
  }, [])

  const checkCount = (count: any) => {
    if (count <= 1) {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'red' }}>{count}</p>
      )
    } else if (count >= 2 && count <= 20) {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'orange' }}>{count}</p>
      )
    } else {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'green' }}>{count}</p>
      )
    }
  }

  return (
    <div style={{ display: 'flex', backgroundColor: '#1a3958' }}>
      <div style={{ width: '10%', minWidth: '150px' }}>
        <AdminTabs name="Home" />
      </div>
      <div className={styles.productContainer}>
        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat', fontWeight: "500", textTransform: 'uppercase' }}>Products</p>
        {checkCount(productsCount)}
      </div>
      <div className={styles.productContainer}>
        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat', fontWeight: "500", textTransform: 'uppercase' }}>Users</p>
        {checkCount(usersList?.length)}
      </div>
      <div className={styles.productContainer}>
        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat', fontWeight: "500", textTransform: 'uppercase' }}>Total sale units</p>
        {checkCount(0)}
      </div>
      <div className={styles.productContainer}>
        <p style={{ textAlign: 'center', fontSize: '25px', fontFamily: 'Montserrat', fontWeight: "500", textTransform: 'uppercase' }}>Total Profit</p>
        {checkCount(0)}
      </div>
    </div>
  )
}

export default Home;