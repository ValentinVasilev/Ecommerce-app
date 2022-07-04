import React, { useEffect, useState } from "react";
import AdminTabs from "../../../components/sub-components/admin-tabs.component";
import styles from '../../../styles/admin/products.module.scss';
import { useAppSelector, useAppDispatch } from "../../../utils/app/hooks";
import { selectAllProducts, getAllProductsAction } from "../../../utils/app/features/products/productsSlice";
import { ApiStatus } from "../../../constants/apiStatus";
import Link from "next/link";

const AdminProducts = () => {

  const [productsList, setProductsList] = useState<any>();
  const dispatch = useAppDispatch();
  const { getAllProductsStatus, products } = useAppSelector(selectAllProducts);

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, [])


  const setProductsInitialState = () => {
    setProductsList(products)
  }

  useEffect(() => {
    if (getAllProductsStatus === ApiStatus.Success) {
      setProductsInitialState()
    }
  }, [getAllProductsStatus])

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '10%', minWidth: '150px' }}>
        <AdminTabs name="Products" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ textAlign: 'center', padding: '2vh' }}>
          <Link href="/admin/products/create" passHref>
            <button className={styles.createBtn}>Create Product</button>
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          {productsList?.products?.map((product: any) => {
            return (
              <div key={product._id} style={{ border: '1px solid coral', margin: '1vh', padding: '2vh' }}>
                <p>{product.category}</p>
                <p>{product.brand}</p>
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.inStock}</p>
                <p>{product.price}</p>
                <p>{product.rating}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AdminProducts;