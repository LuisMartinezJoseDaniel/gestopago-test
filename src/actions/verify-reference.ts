"use server";
import { CreateTransactionFormState } from "@/interfaces/create-transaction-form-state";
import { PayloadSendTx } from "@/interfaces/payload";
import { Producto } from "@/interfaces/product";
import { SendTxResponse } from "@/interfaces/sentTx-response";
import { sendPost } from "@/lib/axiosApi";
import { convertXML2Json } from "@/utils/convertXml2Json";
import { encrypt } from "@/utils/encrypt";
import { z } from "zod";

const createProductSchema = z.object({
  telefono: z.string(),
});

export const verificarReferencia = async (
  formData: FormData,
  product: Producto
): Promise<CreateTransactionFormState> => {
  const data = Object.fromEntries(formData);
  const result = createProductSchema.safeParse(data);
  console.log(result);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const secretKey = `${process.env.SECRET_KEY}`;
    const iv = `${process.env.IV}`;

    const payload: Partial<PayloadSendTx> = {
      referencia: result.data.telefono,
      idProducto: Number(product.attributes.idProducto),
      idServicio: Number(product.attributes.idServicio),
    };

    const encryptedData = encrypt(payload, iv, secretKey);

    const res = await sendPost("/verifyReference.do", encryptedData);
    const response = convertXML2Json<SendTxResponse>(res.data);
    return {
      errors: {},
      response,
    };
  } catch (error) {
    console.log(error);
  }
  return {
    errors: {},
  };
};
