import React from "react";
import categories from "../../assets/data/categories";
import ProductCategoryCard from "../../components/product-category-card";

const Products = () => {

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
      // backgroundColor: '#213236',
      padding: '0vh 1vh 0vh 1vh'
    }}>
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