"use server";
import { getProductList } from ".";

export const getProductById = async (id: string) => {
  try {
    const productList = await getProductList();
    const product = productList.find(
      (product) => product.attributes.idProducto === id
    );

    return product;
  } catch (error) {
    throw new Error("Error al consultar el producto." + error);
  }
};
