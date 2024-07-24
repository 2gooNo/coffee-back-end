import { CategoryModel } from "@/models/categoryModel";
import { AddCategoryInput } from "@/generated";

export const addCategory = async (
  _: unknown,
  { input }: { input: AddCategoryInput }
) => {
  try {
    await CategoryModel.create({
      name: input?.categoryName,
      createdOn: new Date(),
    });
    const allCategory = await CategoryModel.find();

    return allCategory;
  } catch (err) {
    return err;
  }
};
