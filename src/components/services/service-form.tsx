"use client";
import { createServiceTransaction } from "@/actions";
import { Producto } from "@/interfaces/product";
import { SendTxResponse } from "@/interfaces/sentTx-response";
import { Button, CardFooter, useDisclosure } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { ModalComponent } from "../ui/modal-component";

interface Props {
  product: Producto;
}

export const ServiceRedeemForm = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseTx, setResponseTx] = useState<SendTxResponse>();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const { response } = await createServiceTransaction(product);

    setIsLoading(false);
    setResponseTx(response);
  };

  return (
    <CardFooter className="flex-col gap-2 w-full">
      <form onSubmit={onSubmit} className="w-full">
        <Button
          type="submit"
          fullWidth
          color="primary"
          disabled={isLoading}
          onClick={onOpen}
        >
          Confirmar
        </Button>
      </form>

      {responseTx?.RESPONSE.MENSAJE.TEXTO ? (
        <ModalComponent
          modalTitle={responseTx.RESPONSE.MENSAJE.TEXTO.text}
          isOpen={isOpen}
          onClose={onClose}
        >
          <h3 className="text-lg text-center">
            {responseTx.RESPONSE.MENSAJE.TEXTO.text}
          </h3>
        </ModalComponent>
      ) : null}
    </CardFooter>
  );
};
