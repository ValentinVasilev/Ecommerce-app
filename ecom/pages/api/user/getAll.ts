import nc from 'next-connect'
import User from '../../../models/UserModel';
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

handler.get(async (req: Request, res: Response) => {

  await db.connect();

  let getAllProducts = await User.find({});

  db.disconnect();

  if (!getAllProducts) {
    return res.status(500).send({ message: 'There is no products!' })
  } else {
    return res.status(200).send({ Users: getAllProducts });
  }

})

export default handler;