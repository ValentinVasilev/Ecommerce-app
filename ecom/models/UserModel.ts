import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true, default: null },
      title: { type: String, required: true, default: null },
      brand: { type: String, required: true, default: null },
      description: { type: String, required: true, default: null },
      price: { type: Number, required: true, default: null },
      priceOnDiscount: { type: Number, required: true, default: null },
      category: { type: String, required: true, default: null },
    },
  ],
  isAdmin: { type: Boolean, default: false }
}, {
  timestamps: true
})

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;


export type UserObject = {
  _id?: string,
  email: string,
  password: string,
  cart: [],
  isAdmin: boolean,
}

export const emptyUserObject: UserObject = {
  email: '',
  password: '',
  cart: [],
  isAdmin: false,
}

export const parseUserObject = (
  email: string,
  password: string,
  cart: [],
  isAdmin: boolean,
) => {
  return {
    email: email,
    password: password,
    cart: cart,
    isAdmin: isAdmin
  }
} 