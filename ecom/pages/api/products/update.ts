import nc from 'next-connect'
import Product from '../../../models/ProductsModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';


const handler = nc();

interface ProductProps {
  [x: string]: any;
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


handler.put(async (req: Request, res: Response) => {
  await db.connect();
  const product: ProductProps | null = await Product.findById(req.query.id);

  if (product) {
    product.title = req.body.title,
      product.brand = req.body.brand,
      product.description = req.body.description,
      product.price = req.body.price,
      product.priceOnDiscount = req.body.priceOnDiscount,
      product.rating = req.body.rating,
      product.inStock = req.body.inStock,
      product.category = req.body.category,
      product.thumbnail = req.body.thumbnail,
      product.images = req.body.images

    await product.save();
    await db.disconnect();
    res.send({ message: 'Product Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send(`Product with id: ${req.query.id} not found!`);
  }

});

export default handler;