import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  products: [
    {
      size: String,
      quantity: Number,
      productId: String,
    },
  ],
  flavorAmount: Number,
  userId: String,
  date: Date,
  state: String,
});

export const OrderModel =
  mongoose.models.uorderser || mongoose.model("order", orderSchema);
