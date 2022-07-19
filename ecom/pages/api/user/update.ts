import nc from 'next-connect'
import User from '../../../models/UserModel'
import db from '../../../utils/db'
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';


const handler = nc();


handler.put(async (req: Request, res: Response) => {
  await db.connect();

  const user = await User.findById(req.query.id);

  if (user) {
    user.email = req.body.email,
      user.password = bcrypt.hashSync(req.body.password),
      user.cart = req.body.cart,
      user.isAdmin = req.body.isAdmin,

      await user.save();
    await db.disconnect();
    res.send({ message: 'User Updated Successfully' });
  } else {
    await db.disconnect();
    res.status(404).send(`User with id: ${req.query.id} not found!`);
  }
})

export default handler;