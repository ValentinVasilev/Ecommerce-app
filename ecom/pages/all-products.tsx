import AllProductsData from '../assets/data/products';

const AllProducts = () => {
  return (
    <div>
      {AllProductsData.map(product => {
        return (
          <div key={product.id} style={{ border: '2px solid red', padding: '1vh' }}>
            <p>{product.Name || product.title}</p>
            <p>{product.description || product.Description}</p>
            <p>{product.price}</p>
            <p>{product.discountPercentage}</p>
            <p>{product.rating}</p>
            <p>{product.stock}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AllProducts;

