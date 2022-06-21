import nc from 'next-connect'
import Product from '../../../models/ProductsModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

handler.get(async (req: Request, res: Response) => {
  await db.connect();
  const productById = await Product.findById(req.query.id);
  await db.disconnect();
  res.send({ product: productById });
});

export default handler;