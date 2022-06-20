import nc from 'next-connect'
import User from '../../../models/UserModel';
import db from '../../../utils/db';
import bcrypt from 'bcryptjs';
import { Request, Response } from 'express';
import { signToken } from '../../../utils/auth';

const handler = nc();

handler.post(async (req: Request, res: Response) => {

  await db.connect();

  const user = await User.findOne({ email: req.body.email });

  await db.disconnect();

  if (user && bcrypt.compareSync(req.body.password, user.password)) {

    const token = signToken(user);

    res.send({
      user: {
        token,
        _id: user._id,
        isAdmin: user.isAdmin,
      }
    })

  } else {
    res.status(401).send({ message: "Invalid User or Password!" })
  }
})

export default handler;