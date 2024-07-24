import { CategoryModel } from "@/models/categoryModel";

export const getAllCategory = async () => {
  try {
    const allCategory = await CategoryModel.find();
    return allCategory;
  } catch (err) {
    return err;
  }
};
