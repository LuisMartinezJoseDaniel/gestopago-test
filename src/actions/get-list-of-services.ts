"use server";
import prisma from "../db/index";

export const getListOfServices = async () => {
  try {
    // const res = await axios.get("/getProductList.do");
    const listOfServices = await prisma.servicios.findMany(); // TODO: Mejorar implementacion

    // const newListOfServices = filterByUniqueId(
    //   listOfServices,
    //   "idCatTipoServicio"
    // )
    //   .map((producto) => ({
    //     idCatTipoServicio: producto.attributes.idCatTipoServicio,
    //     servicio: producto.attributes.servicio,
    //   }))
    //   .sort((a, b) => +a.idCatTipoServicio - +b.idCatTipoServicio);

    return listOfServices;
  } catch (error) {
    throw new Error("Error al consultar el listado de servicios." + error);
  }
};
