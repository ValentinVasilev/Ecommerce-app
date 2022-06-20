import React, { useState } from 'react';
import AllProductsData from '../assets/data/products';


const AllProducts = () => {

  const [productsData, setProductsData] = useState();

  const RenderData = () => {
    setProductsData(AllProductsData);
    // Optional u can set setTimeout to simulate loading.
    // setTimeout(() => {
    //   setProductsData(AllProductsData);
    // }, [1000])
  }

  return (
    <div>
      <button onClick={() => RenderData()}>Load data</button>
      {
        productsData ? (
          // If there is data render this
          productsData?.map(product => {
            return (
              <div key={product.id} style={{ border: '2px solid red', padding: '1vh' }}>
                <p>{product.title}</p>
              </div>
            )
          })
        ) : (null) // If there is no data.
      }
    </div>
  )
}

export default AllProducts;

