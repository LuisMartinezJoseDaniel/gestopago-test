"use server";
import { ValidateMeResponse } from "@/interfaces/validateMe";
import axios from "@/lib/axios";
import { convertXML2Json } from "@/utils/convertXml2Json";
export const validateMe = async () => {
  try {
    const validateMe = await axios("/validateMe.do");
    const data = convertXML2Json<ValidateMeResponse>(validateMe.data);

    return data;
  } catch (error) {
    throw new Error("No se pudo obtener datos  del comercio.");
  }
};
