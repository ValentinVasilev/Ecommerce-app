import React, { useEffect } from "react";
import { useRouter } from "next/router";
import ProductsList from "../../../assets/data/products";
import Link from "next/link";

const Category = () => {

  const router = useRouter();

  const productCategory = router.query.category;

  console.log(router)

  return (
    <div>
      {ProductsList
        .filter(category => category.category === productCategory)
        .map(product => {
          return (
            <div key={product.id}>
              <p>{product.title}</p>
              <Link href={
                {
                  pathname: "category/[id]",
                  query: {
                    id: product.id,
                  }
                }
              } as={`${productCategory}/${product.id}`} key={product.id}
                passHref
              >
                <button>View More</button>
              </Link>
            </div>
          )
        })
      }
    </div>
  )

}

export default Category;