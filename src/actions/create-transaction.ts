"use server";
import { CreateTransactionFormState } from "@/interfaces/create-transaction-form-state";
import { Producto } from "@/interfaces/product";
import paths from "@/paths";
import { revalidatePath } from "next/cache";
import { createProductTransaction } from ".";
import { verificarReferencia } from "./verify-reference";

export async function createTransaction(
  formData: FormData,
  product: Producto
): Promise<CreateTransactionFormState> {
  let response: CreateTransactionFormState = {
    errors: {},
  };
  switch (product.attributes.tipoFront) {
    case "1":
    case "2":
      response = await createProductTransaction(formData, product);
      break;

    case "4":
      response = await verificarReferencia(formData, product);
      break;
  }

  revalidatePath(paths.home());
  return response;
}
