"use server";
import { CreateTransactionFormState } from "@/interfaces/create-transaction-form-state";
import { PayloadSendTx } from "@/interfaces/payload";
import { Producto } from "@/interfaces/product";
import { SendTxResponse } from "@/interfaces/sentTx-response";
import { sendPost } from "@/lib/axiosApi";
import { convertXML2Json } from "@/utils/convertXml2Json";
import { encrypt } from "@/utils/encrypt";
import { z } from "zod";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const createProductSchema = z.object({
  telefono: z.string(),
  montoPago: z.coerce.number().optional(),
});

export async function createProductTransaction(
  formData: FormData,
  product: Producto
): Promise<CreateTransactionFormState> {
  const data = Object.fromEntries(formData);

  const result = createProductSchema.safeParse(data);
  console.log(result);
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { attributes } = product;

  let telefono = result.data.telefono;
  if (attributes.tipoFront === "2") {
    telefono = "1111111111";
  }

  const payload: PayloadSendTx = {
    idProducto: +attributes.idProducto,
    idServicio: +attributes.idServicio,
    telefono,
    referencia: attributes.tipoFront === "2" ? telefono : undefined,
    horaLocal: "20220101235900",
    upc: "test_UPC_83_348",
    unidad: "083",
    montoPago: formData.get("montoPago")
      ? +formData.get("montoPago")!
      : undefined,
  };

  const secretKey = `${process.env.SECRET_KEY}`;
  const iv = `${process.env.IV}`;

  try {
    const encryptedData = encrypt(payload, iv, secretKey);

    const res = await sendPost("/sendTx.do", encryptedData);
    const response = convertXML2Json<SendTxResponse>(res.data);

    return {
      errors: {},

      response,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
  }

  return {
    errors: {},
  };
  // redirect(paths.home);

  //TODO: revalidate balance at home page after a success transaction
}
