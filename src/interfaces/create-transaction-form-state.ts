import { SendTxResponse } from "./sentTx-response";

export interface CreateTransactionFormState {
  errors: {
    telefono?: string[];
    montoPago?: string[];
  };

  response?: SendTxResponse;
}
