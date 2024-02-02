"use client";

import { createTransaction } from "@/actions/create-transaction";
import { Producto } from "@/interfaces/product";
import { SendTxResponse } from "@/interfaces/sentTx-response";
import {
  Button,
  Card,
  CardBody,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ModalComponent } from "../ui/modal-component";

interface ServiceInputsForm {
  telefono: string;
  montoPago: string;
}

interface Props {
  product: Producto;
  title: string;
}

export const ProductForm = ({ product, title }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [responseTx, setResponseTx] = useState<SendTxResponse>();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ServiceInputsForm>({
    defaultValues: {
      telefono: "",
      montoPago: "",
    },
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const onSubmit = async (data: ServiceInputsForm) => {
    const formData = new FormData();
    formData.append("telefono", data.telefono);
    formData.append("montoPago", data.montoPago);
    setIsLoading(true);
    const { errors, response } = await createTransaction(formData, product);

    setIsLoading(false);
    setResponseTx(response);
  };

  const renderedInputMontoPago =
    product.attributes.tipoFront === "2" ? (
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg text-center">Monto Pago</h3>
        <Input
          type="number"
          {...register("montoPago", {
            required: {
              value: true,
              message: "El campo es requerido",
            },
            valueAsNumber: true,
            min: {
              value: 1,
              message: "El monto mínimo es 1",
            },
          })}
          name="montoPago"
          label="Monto del pago"
          labelPlacement="outside"
          placeholder="Ingrese su monto a pagar"
          isInvalid={!!errors.montoPago?.message}
          errorMessage={errors.montoPago?.message}
        />
      </div>
    ) : null;

  const label =
    product.attributes.tipoReferencia === "a"
      ? "Número de teléfono"
      : product.attributes.tipoReferencia === "b"
      ? "Número de Cliente / Servicio / Contrato / Número de etiqueta"
      : product.attributes.tipoReferencia === "c"
      ? "Código de barras"
      : "";

  const minLengthValue = label === "Número de teléfono" ? 10 : 1;
  const maxLengthValue = label === "Número de teléfono" ? 10 : 60;

  return (
    <>
      <Card>
        <CardBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-lg text-center">{title}</h3>
              <div className="mt-4">
                <Input
                  {...register("telefono", {
                    required: {
                      value: true,
                      message: "El campo es requerido",
                    },
                    minLength: {
                      value: minLengthValue,
                      message: `La longitud mínima es ${minLengthValue} caracteres`,
                    },
                    maxLength: {
                      value: maxLengthValue,
                      message: `La longitud máxima es ${maxLengthValue} caracteres`,
                    },
                  })}
                  name="telefono"
                  label={label}
                  labelPlacement="outside"
                  placeholder={label}
                  isInvalid={!!errors.telefono?.message}
                  errorMessage={errors.telefono?.message}
                />
              </div>
            </div>
            {renderedInputMontoPago}
            <Button
              type="submit"
              color="primary"
              fullWidth
              onClick={handleOpen}
              disabled={isLoading}
            >
              Confirmar
            </Button>
          </form>
        </CardBody>
      </Card>
      {responseTx?.RESPONSE.MENSAJE.TEXTO ? (
        <ModalComponent
          modalTitle={responseTx.RESPONSE.MENSAJE.TEXTO.text}
          isOpen={isOpen}
          onClose={onClose}
        >
          {responseTx.RESPONSE.FECHA?.text && (
            <p className="text-tiny">
              Fecha:{" "}
              <span className="font-bold">
                {responseTx.RESPONSE.FECHA?.text}
              </span>
            </p>
          )}
          {responseTx.RESPONSE.MENSAJE?.SALDO?.text && (
            <p className="text-tiny">
              Saldo:
              <span className="font-bold">
                ${responseTx.RESPONSE.MENSAJE.SALDO.text}
              </span>
            </p>
          )}
          {responseTx.RESPONSE.MENSAJE?.PIN?.text && (
            <p className="text-tiny">
              PIN:
              <span className="font-bold">
                {responseTx.RESPONSE.MENSAJE.PIN.text}
              </span>
            </p>
          )}
          {responseTx.RESPONSE.MENSAJE?.legend?.cdata && (
            <p className="text-tiny">
              Leyenda:
              <span className="font-bold">
                {responseTx.RESPONSE.MENSAJE.legend.cdata}
              </span>
            </p>
          )}
        </ModalComponent>
      ) : null}
    </>
  );
};
