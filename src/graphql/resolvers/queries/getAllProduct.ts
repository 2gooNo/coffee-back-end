import { getAllProductService } from "@/services/productService";

export const getAllProduct = async () => {
  try {
    const allProduct = await getAllProductService();
    return allProduct;
  } catch (err) {
    return err;
  }
};
