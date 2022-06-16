import React, { useState } from "react";
import Allproducts from '../../assets/data/products'
import Image from "next/image";
import Link from "next/link";
import ProductCard from '../../components/product-card.component';
import CategoryPanel from "../../components/category-panel.component";
import categories from "../../assets/data/categories";
import { Card, Grid, List, ListItem, ListItemText } from '@mui/material'
import Tab from "../../components/sub-components/tabs.component";


const Products = () => {

  const [filterCategory, setFilterCategory] = useState(false);
  let activeCategory = 'skincare';


  const CategoryIsActive = (cat: string) => {
    setFilterCategory(!filterCategory)
    // activeCategory?.push(cat);
    activeCategory = cat;
    console.log(activeCategory)
    // console.log(activeCategory[0])
  }

  // return (<div style={{ display: 'flex', border: '1px solid green' }}>
  //   <div>
  //     {/* <CategoryPanel /> */}
  //     {categories.map(category => {
  //       return (
  //         <div key={category}  >
  //           <button onClick={() => CategoryIsActive(category)}>{category}</button>
  //         </div>
  //       )
  //     })}
  //   </div>
  //   <div style={{ display: 'flex' }}>
  //     {Allproducts
  //       // .slice(0, 4)
  //       .filter(cat => cat.category === activeCategory)
  //       .map(product => {
  //         return (
  //           <div key={product.id} style={{ border: '2px solid red', padding: '1vh', maxWidth: '400px' }}>
  //             <p>{product.id}</p>
  //             <p>{product.title}</p>
  //             <p>{product.description}</p>
  //             <p>{product.price}</p>
  //             <p>{product.discountPercentage}</p>
  //             <p>{product.rating}</p>
  //             <p>{product.stock}</p>
  //             <p>{product.brand}</p>
  //             <p>{product.category}</p>
  //             <div style={{ display: 'flex', flexDirection: 'column' }}>
  //               {product.images?.map(img => {
  //                 return <p key={product.title}>{img}</p>
  //               })}
  //             </div>
  //             {/* <div>
  //           <Image src={product?.thumbnail} alt="product img" width={300} height={200} />
  //         </div> */}
  //             <Link href={
  //               // `/products/${product.id || product["Product ID"]}`
  //               {
  //                 pathname: "/products/[id]",
  //                 query: {
  //                   id: product.id,
  //                 }
  //               }
  //             } as={`/products/${product.id}`} key={product.id}
  //               passHref
  //             >
  //               <button>View More</button>
  //             </Link>
  //           </div>
  //           // <ProductCard
  //           //   key={product.id}
  //           //   title={product.title}
  //           //   description={product.description}
  //           //   price={product.price}
  //           //   rating={product.rating}
  //           //   brand={product.brand}
  //           //   thumbnail={product.thumbnail}
  //           // />
  //         )
  //       })}
  //   </div>
  // </div >)
  return (
    // <>
    //   <Grid container>
    //     <Grid item sm={2} style={{ border: '1px solid red' }}>
    //       <Tab link="/products" title="products" />
    //       <Tab link="/" title="home" />
    //       <Tab link="/" title="home" />
    //       <Tab link="/" title="home" />
    //     </Grid>
    //     <Grid item sm={10} style={{ border: '1px solid green' }}>right</Grid>
    //   </Grid>
    // </>
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      {categories.map(category => {
        return (
          <div key={category} style={{ border: '1px solid red', margin: '1vh' }}>
            <p>{category}</p>
            <Link href={
              // `/products/${product.id || product["Product ID"]}`
              {
                pathname: "products/category",
                query: {
                  id: category,
                }
              }
            } as={`products/${category}`} key={category}
              passHref
            >
              <button>View More</button>
            </Link>
          </div>
        )
      })}
    </div>
  )

}

export default Products;