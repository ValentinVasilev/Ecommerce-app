import nc from 'next-connect'
import Product from '../../../models/ProductsModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

handler.get(async (req: Request, res: Response) => {

  await db.connect();

  let getAllProducts = await Product.find({});

  db.disconnect();

  if (!getAllProducts) {
    return res.status(500).send({ message: 'There is no products!' })
  } else {
    return res.status(200).send({ products: getAllProducts });
  }

})

export default handler;