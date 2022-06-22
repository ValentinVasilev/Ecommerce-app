import nc from 'next-connect'
import User from '../../../models/UserModel'
import db from '../../../utils/db';
import { Request, Response } from 'express';

const handler = nc();

handler.get(async (req: Request, res: Response) => {
  await db.connect();
  const userById = await User.findById(req.query.id);
  await db.disconnect();
  res.send({ user: userById });
});

export default handler;