import React, { useState } from 'react'
import { MenuItem, TextField } from '@mui/material';
import styles from '../../../styles/admin/create-product.module.scss';
import categories from '../../../assets/data/categories';


const CreateProduct = () => {

  const fieldsWidth = '40%';

  const [title, setTitle] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [priceOnDiscount, setPriceOnDiscount] = useState<number>(0);
  const [inStock, setInStock] = useState<number>(0);
  const [category, setCategory] = useState<string>('');

  const product = {
    title: title,
    brand: brand,
    description: description,
    price: price,
    priceOnDiscount: priceOnDiscount,
    inStock: inStock,
    category: category,
  }


  const DisplayProductData = () => {
    console.log(product)
  }

  return (
    <div className={styles.productContainer}>
      <div className={styles.images}>Images part</div>
      <div className={styles.inputFields}>
        <div className={styles.fields}>
          <TextField label="Title" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setTitle((e.target as HTMLInputElement).value)} />
        </div>
        <div className={styles.fields}>
          <TextField label="Brand" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setBrand((e.target as HTMLInputElement).value)} />
        </div>
        <div className={styles.fields}>
          <TextField label="Description" variant="outlined" multiline maxRows={4} sx={{ width: fieldsWidth }} onInput={(e) => setDescription((e.target as HTMLInputElement).value)} />
        </div>
        <div className={styles.fields}>
          <TextField label="Price" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setPrice(Number((e.target as HTMLInputElement).value))} />
        </div>
        <div className={styles.fields}>
          <TextField label="PriceOnDiscount" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setPriceOnDiscount(Number((e.target as HTMLInputElement).value))} />
        </div>
        <div className={styles.fields}>
          <TextField label="Instock" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setInStock(Number((e.target as HTMLInputElement).value))} />
        </div>
        <div className={styles.fields}>
          <TextField label="Category" variant="outlined" select
            sx={{ width: fieldsWidth }}
            onInput={(e) => setCategory(categories.title)}
          >
            {categories.map(category => (
              <MenuItem key={category.id} value={category.title} >
                {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <button onClick={() => DisplayProductData()}>Display Data</button>
      </div>
    </div>
  )
}

export default CreateProduct