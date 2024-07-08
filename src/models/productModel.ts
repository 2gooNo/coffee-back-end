import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  imageUrl: String,
  name: String,
  price: {
    small: Number,
    medium: Number,
    large: Number,
  },
  description: String,
  categoryId: String,
});

export const ProductModel =
  mongoose.models.product || mongoose.model("product", productSchema);
