import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({

  title: { type: String, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  priceOnDiscount: { type: Number },
  rating: { type: Number },
  inStock: { type: Number, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String },
  images: [{ type: String }]

}, { timestamps: true })

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);
export default Product;