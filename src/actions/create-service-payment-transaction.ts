"use server";

import { CreateTransactionFormState } from "@/interfaces/create-transaction-form-state";
import { PayloadSendTx } from "@/interfaces/payload";
import { Producto } from "@/interfaces/product";
import { SendTxResponse } from "@/interfaces/sentTx-response";
import { sendPost } from "@/lib/axiosApi";
import { convertXML2Json } from "@/utils/convertXml2Json";
import { encrypt } from "@/utils/encrypt";

export const createServiceTransaction = async (
  product: Producto
): Promise<CreateTransactionFormState> => {
  const { attributes } = product;
  let telefono = "";
  if (
    attributes.idCatTipoServicio === "10" ||
    attributes.idCatTipoServicio === "11"
  ) {
    telefono = "#1111111111";
  }

  const payload: PayloadSendTx = {
    idProducto: +attributes.idProducto,
    idServicio: +attributes.idServicio,
    telefono,
    horaLocal: "20220101235900",
    upc: "test_UPC_83_348",
    unidad: "083",
  };

  const secretKey = `${process.env.SECRET_KEY}`;
  const iv = `${process.env.IV}`;

  try {
    const encryptedData = encrypt(payload, iv, secretKey);
    const result = await sendPost("/sendTx.do", encryptedData);
    const response = convertXML2Json<SendTxResponse>(result.data);
    return {
      errors: {},
      response,
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }

  return {
    errors: {},
  };
};
