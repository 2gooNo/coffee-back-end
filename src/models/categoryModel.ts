import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
});

export const CategoryModel =
  mongoose.models.category || mongoose.model("category", categorySchema);
