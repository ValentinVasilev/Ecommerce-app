import React from "react";
import Allproducts from '../../assets/data/products'
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (<div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {Allproducts
      // .slice(0, 3)
      .map(product => {
        return (
          <div key={product.id} style={{ border: '2px solid red', padding: '1vh', flex: '0 1 25%', flexBasis: '25%' }}>
            <p>{product.id}</p>
            <p>{product.Name || product.title}</p>
            <p>{product.description || product.Description}</p>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <div>
              {product.images?.map(img => {
                return <p key={product.Name}>{img}</p>
              })}
            </div>
            {/* <div>
            <Image src={product?.thumbnail} alt="product img" width={300} height={200} />
          </div> */}
            <Link href={
              // `/products/${product.id || product["Product ID"]}`
              {
                pathname: "/products/[id]",
                query: {
                  id: product.id,
                }
              }
            } as={`/products/${product.id}`} key={product.id}
              passHref
            >
              <button>View More</button>
            </Link>
          </div>
        )
      })}
  </div >)
}

export default Products;