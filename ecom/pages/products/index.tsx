import React, { useState } from "react";
import categories from "../../assets/data/categories";
import ProductCategoryCard from "../../components/product-category-card";

const Products = () => {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '90%', justifyContent: 'center', alignItems: 'flex-start', backgroundColor: 'black' }}>
      {categories
        .filter(categoryCount => categoryCount.count > 0)
        .map(category => {
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