import React, { useState } from "react";
import Allproducts from '../../assets/data/products'
import Image from "next/image";
import Link from "next/link";
import ProductCard from '../../components/product-card.component';
import CategoryPanel from "../../components/category-panel.component";
import categories from "../../assets/data/categories";
import { Card, Grid, List, ListItem, ListItemText } from '@mui/material'
import Tab from "../../components/sub-components/tabs.component";
import ProductCategoryCard from "../../components/product-category-card";


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
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '90%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'black' }}>
      {categories.map(category => {
        return (
          <div key={category.id} >
            <ProductCategoryCard
              category={category.title}
              categoryImage={category.img}
            />
          </div>
        )
      })}
    </div>
  )

}

export default Products;