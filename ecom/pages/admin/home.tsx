import React, { useEffect, useState } from "react";
import AdminTabs from "../../components/sub-components/admin-tabs.component";
import axios from "axios";
import styles from '../../styles/admin/home.module.scss';
import { useAppSelector, useAppDispatch } from "../../utils/app/hooks";
import { ApiStatus } from "../../constants/apiStatus";
import { selectAllUsers, getAllUsersAction } from '../../utils/app/features/users/usersSlice';
import { selectAllProducts, getAllProductsAction } from '../../utils/app/features/products/productsSlice';

const Home = () => {

  const [usersList, setUsersList] = useState<any>();
  const [productsList, setProductsList] = useState<any>();

  const dispatch = useAppDispatch();

  const { getAllUsersStatus, users } = useAppSelector(selectAllUsers)
  const { getAllProductsStatus, products } = useAppSelector(selectAllProducts);

  useEffect(() => {
    dispatch(getAllUsersAction());
    dispatch(getAllProductsAction());
  }, [])


  const setUsersInitialState = () => {
    setUsersList(users.Users)
  }

  const setProductsInitialState = () => {
    setProductsList(products.products)
  }

  useEffect(() => {
    if (getAllUsersStatus === ApiStatus.Success) {
      setUsersInitialState()
    }
  }, [getAllUsersStatus])

  useEffect(() => {
    if (getAllProductsStatus === ApiStatus.Success) {
      setProductsInitialState()
    }
  }, [getAllProductsStatus])


  // console.log(products)
  // useEffect(() => {
  //   axios.get('/api/products/getAll')
  //     .then(data => data)
  //     .then(prod => {
  //       setProductsCount(prod.data);
  //     })
  // }, [])



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
        {checkCount(productsList?.length)}
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