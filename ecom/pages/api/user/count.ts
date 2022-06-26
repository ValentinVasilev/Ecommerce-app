import nc from 'next-connect'
import User from '../../../models/UserModel';
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

handler.get(async (req: Request, res: Response) => {

  await db.connect();

  let getAllUsers = await User.find({}).count();

  db.disconnect();

  if (!getAllUsers) {
    return res.status(500).send({ message: 'There is no Users!' })
  } else {
    return res.status(200).send(getAllUsers);
  }

})

export default handler;