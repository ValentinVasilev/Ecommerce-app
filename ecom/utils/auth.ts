import jwt from 'jsonwebtoken'

interface User {
  _id: string,
  email: string,
  isAdmin?: boolean,
}

const secretKey: string = "test123";

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

