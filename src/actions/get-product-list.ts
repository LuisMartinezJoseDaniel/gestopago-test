"use server";
import { ProductListResponse, Producto } from "@/interfaces/product";
import axios from "@/lib/axios";
import { convertXML2Json } from "@/utils/convertXml2Json";

export const getProductList = async (): Promise<Producto[]> => {
  try {
    const res = await axios.get("/getProductList.do");
    const listOfServices = convertXML2Json<ProductListResponse>(res.data)
      .RESPONSE.PRODUCTOS.producto;

    return listOfServices;
  } catch (error) {
    throw new Error("Error al consultar el listado de productos." + error);
  }
};
