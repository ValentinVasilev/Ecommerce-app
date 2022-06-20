import jwt from 'jsonwebtoken'

interface User {
  _id: string,
  email: string,
  isAdmin?: boolean,
}

const secretKey: any = process.env.JWT_SECRET_TOKEN;

// Asign token to the user
const signToken = (user: User) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      isAdmin: false,
    },
    secretKey,
    { expiresIn: "2d" }
  )
}

export { signToken }