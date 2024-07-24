import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  imageURL: [String],
  name: String,
  price: {
    small: String,
    medium: String,
    large: String,
  },
  description: String,
  categoryId: String,
});

export const ProductModel =
  mongoose.models.product || mongoose.model("product", productSchema);
