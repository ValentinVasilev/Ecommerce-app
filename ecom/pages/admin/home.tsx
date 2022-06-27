import React, { useEffect, useState } from "react";
import AdminTabs from "../../components/sub-components/admin-tabs.component";
import axios from "axios";
import styles from '../../styles/admin/home.module.scss';

const Home = () => {

  const [productsCount, setProductsCount] = useState();
  const [usersCount, setUsersCount] = useState();

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
        {checkCount(usersCount)}
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