import React, { useState, useEffect } from 'react'
import { MenuItem, TextField } from '@mui/material';
import styles from '../../../styles/admin/create-product.module.scss';
import categories from '../../../assets/data/categories';
import { height } from '@mui/system';


const CreateProduct = () => {

  const fieldsWidth = '40%';

  const [title, setTitle] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [priceOnDiscount, setPriceOnDiscount] = useState<number>(0);
  const [inStock, setInStock] = useState<number>(0);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState<string[]>([])

  let newArray = [''];

  const product = {
    title: title,
    brand: brand,
    description: description,
    price: price,
    priceOnDiscount: priceOnDiscount,
    inStock: inStock,
    category: category,
    images: images,
  }


  const DisplayProductData = () => {
    console.log(product)
  }

  const AddImage = (image: any) => {

    if (image === '') {
      return;
    } else if (images.includes(image)) {
      return;
    }

    images.push(image);
    setImage('')
  }

  const RemoveImg = (img: any) => {



    let indexId = images.indexOf(img);
    let newArray = images.splice(indexId, 1);

    console.log(indexId)
    console.log(newArray)

    setImages(newArray);



    // console.log(img)
    // console.log(images)
    // // setImages(images.filter(indx => indx != index));
    // console.log(indexId)
    // // console.log(images)

  }

  // useEffect(() => {
  // }, [images])

  return (
    <div className={styles.productContainer}>
      <div className={styles.images}>
        <div style={{ height: '400px', border: '1px solid' }}>Thumbnail Section</div>
        <div style={{ border: '1px solid' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin: '2vh 0vh 2vh 1vh' }}>
            <TextField label="Image" variant="outlined" sx={{ width: fieldsWidth }} onInput={(e) => setImage((e.target as HTMLInputElement).value)} value={image} />
            <button className={styles.addImageBtn} onClick={() => AddImage(image)}>Add image</button>
          </div>
        </div>
        <div>
          {images.length >= 1 &&
            (images?.map((img: any) => (
              <div key={img} className={styles.listOfImages} >
                <p style={{
                  fontFamily: 'Montserrat',
                  margin: '0vh 0vh 0vh 1vh',
                  paddingRight: '1vh',
                  borderRight: '1px solid',
                  height: '47px',
                  alignSelf: 'center',
                  display: 'flex',
                  alignItems: 'center'
                }}>{images.indexOf(img) + 1}</p>
                <p style={{
                  fontFamily: 'Montserrat',
                  fontSize: '20px',
                  fontWeight: '500',
                }}>{img}</p>
                <div>
                  <button
                    style={{
                      fontFamily: 'Montserrat',
                      margin: '0vh 1vh 0vh 1vh',
                      border: 'none',
                      fontSize: '35px',
                      backgroundColor: 'red',
                      color: 'white',
                      height: '64px',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                    onClick={() => RemoveImg(img)}
                  >X</button>
                </div>
              </div>
            )))}
        </div>
      </div>
      <div className={styles.inputFields}>
        <div className={styles.fields}>
          <TextField
            label="Title" variant="outlined"
            sx={{ width: fieldsWidth }}
            onInput={(e) => setTitle((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.fields}>
          <TextField
            label="Brand"
            variant="outlined"
            sx={{ width: fieldsWidth }}
            onInput={(e) => setBrand((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.fields}>
          <TextField
            label="Description"
            variant="outlined"
            multiline
            maxRows={4}
            sx={{ width: fieldsWidth }}
            onInput={(e) => setDescription((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.fields}>
          <TextField
            label="Price"
            variant="outlined"
            sx={{ width: fieldsWidth }}
            onInput={(e) => setPrice(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div className={styles.fields}>
          <TextField
            label="PriceOnDiscount"
            variant="outlined"
            sx={{ width: fieldsWidth }}
            onInput={(e) => setPriceOnDiscount(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div className={styles.fields}>
          <TextField
            label="Instock"
            variant="outlined"
            sx={{ width: fieldsWidth }}
            onInput={(e) => setInStock(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div className={styles.fields}>
          <TextField label="Category" variant="outlined" select
            sx={{ width: fieldsWidth }}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map(category => (
              <MenuItem key={category.id} value={category.title} >
                {category.title.charAt(0).toUpperCase() + category.title.slice(1)}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <button className={styles.createBtn} onClick={() => DisplayProductData()}>Create Product</button>
      </div>
    </div>
  )
}

export default CreateProduct