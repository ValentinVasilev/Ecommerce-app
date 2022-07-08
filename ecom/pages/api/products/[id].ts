import nc from 'next-connect'
import Product from '../../../models/ProductsModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';


const handler = nc();

handler.delete(async (req: Request, res: Response) => {
  await db.connect();
  const deleteProductById = await Product.findById(req.query.id);

  if (deleteProductById) {
    await deleteProductById.remove();
    await db.disconnect();
    res.send({ message: `Product with id: ${req.query.id} was successfully deleted!` })
  } else {
    await db.disconnect();
    res.status(404).send(`Product with id: ${req.query.id} not found!`);
  }

});

export default handler;