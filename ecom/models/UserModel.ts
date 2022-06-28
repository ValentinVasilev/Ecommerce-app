import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [{ type: String }],
}, {
  timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;


export type UserObject = {
  _id?: string,
  email: string,
  password: string,
  cart: string[]
}

export const emptyUserObject: UserObject = {
  email: '',
  password: '',
  cart: ['']
}

export const parseUserObject = (
  email: string,
  password: string,
  cart: string[]
) => {
  return {
    email: email,
    password: password,
    cart: cart
  }
} 