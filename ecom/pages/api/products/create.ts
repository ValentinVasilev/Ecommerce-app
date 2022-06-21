import nc from 'next-connect'
import Product from '../../../models/ProductsModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

interface ProductProps {
  title: string,
  brand: string,
  description: string,
  price: number,
  priceOnDiscount: number,
  rating: number,
  inStock: number,
  category: string,
  thumbnail: string,
  images: string[],
}



handler.post(async (req: Request, res: Response) => {

  await db.connect();

  let newProduct = new Product<ProductProps>({

    title: req.body.title,
    brand: req.body.brand,
    description: req.body.description,
    price: req.body.price,
    priceOnDiscount: req.body.priceOnDiscount,
    rating: req.body.rating,
    inStock: req.body.inStock,
    category: req.body.category,
    thumbnail: req.body.thumbnail,
    images: req.body.images,

  })

  newProduct.save();
  db.disconnect();

  if (!newProduct) {
    return res.status(500).send({ message: 'Product cannot be created!' })
  } else {
    return res.status(200).send(newProduct);
  }

})

export default handler;