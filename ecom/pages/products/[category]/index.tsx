import React from "react";
import { useRouter } from "next/router";

const Category = () => {

  const router = useRouter();

  console.log(router)
  return (
    <div>{router.query.category}</div>
  )
}

export default Category;