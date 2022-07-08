import React, { useEffect, useState } from "react";
import AdminTabs from "../../../components/sub-components/admin-tabs.component";
import styles from '../../../styles/admin/products.module.scss';
import { useAppSelector, useAppDispatch } from "../../../utils/app/hooks";
import { selectAllProducts, getAllProductsAction, deleteProductById } from "../../../utils/app/features/products/productsSlice";
import { ApiStatus } from "../../../constants/apiStatus";
import Link from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";

const AdminProducts = () => {

  const router = useRouter();

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


  const DeleteProduct = (id: string) => {

    dispatch(deleteProductById(id));

    let index = productsList.products.findIndex((x: any) => x._id === id);

    let newArray = [...productsList.products];

    newArray.splice(index, 1);

    setProductsList({ products: newArray })

  }


  const checkRating = (rating: any) => {
    if (rating <= 1) {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'red' }}>{rating}</p>
      )
    } else if (rating >= 2 && rating <= 3.5) {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'orange' }}>{rating}</p>
      )
    } else {
      return (
        <p style={{ textAlign: 'center', fontSize: '18px', fontFamily: 'Montserrat', fontWeight: "500", color: 'green' }}>{rating}</p>
      )
    }
  }

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
        <p style={{ fontSize: '25px', fontFamily: 'monospace', alignSelf: 'center' }}>Total Products Count: {productsList?.products?.length}</p>
        <table className={styles.table}>
          <tr>
            <th className={styles.th}>Category</th>
            <th className={styles.th}>Brand</th>
            <th className={styles.th}>Title</th>
            <th className={styles.th}>Description</th>
            <th className={styles.th}>InStock</th>
            <th className={styles.th}>Price in $</th>
            <th className={styles.th}>Rating</th>
            <th className={styles.th}>Actions</th>
          </tr>
          {productsList?.products?.map((product: any) => {
            return (
              <tr key={product._id} className={styles.tr}>
                <td className={styles.td}>{product.category}</td>
                <td className={styles.td}>{product.brand}</td>
                <td className={styles.td}>{product.title}</td>
                <td className={styles.td}>{product.description}</td>
                <td className={styles.td}>{product.inStock}</td>
                <td className={styles.td}>$ {product.price}</td>
                <td className={styles.td}>{checkRating(product.rating)}</td>
                <td className={styles.tdActions} >
                  <Button className={styles.btn} variant="contained" color="primary">Update</Button>
                  <Button className={styles.btn} variant="contained" color="error" onClick={() => DeleteProduct(product._id)}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  )
}

export default AdminProducts;