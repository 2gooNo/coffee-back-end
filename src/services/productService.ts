import { ProductModel } from "@/models/productModel";
import { AddProductInput } from "@/generated";

export const addProductService = async (input: AddProductInput) => {
  console.log(input);

  try {
    await ProductModel.create({
      imageURL: input?.imageURL,
      name: input?.name,
      price: {
        small: input?.price?.small,
        medium: input?.price?.medium,
        large: input?.price?.large,
      },
      description: input?.description,
      categoryId: input?.categoryId,
      createdOn: new Date(),
    });
    const allProduct = await ProductModel.find();

    return allProduct;
  } catch (err) {
    return err;
  }
};
export const getAllProductService = async () => {
  try {
    const allProduct = await ProductModel.find();
    return allProduct;
  } catch (err) {
    return err;
  }
};
