import nc from 'next-connect'
import User from '../../../models/UserModel';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';

const handler = nc();

handler.post(async (req: Request, res: Response) => {
  await db.connect();

  let newUser = new User({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    cart: req.body.cart,
  })

  newUser.save();
  db.disconnect();

  if (!newUser) {
    return res.status(500).send({ message: 'User cannot be creted!' })
  } else {
    res.send(newUser)
  }

})


// handler.get(async (req: Request, res: Response) => {
//   await db.connect();
//   const users = await User.find({});
//   db.disconnect();
//   res.send(users)
// })

export default handler;