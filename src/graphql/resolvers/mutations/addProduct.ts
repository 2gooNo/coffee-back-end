import { AddProductInput } from "@/generated";
import { addProductService } from "@/services/productService";

export const addProduct = async (
  _: unknown,
  { input }: { input: AddProductInput }
) => {
  // console.log(input?.avatar);

  try {
    const allProduct = await addProductService(input);
    console.log("allProduct", allProduct);

    return allProduct;
  } catch (err) {
    return err;
  }
};
