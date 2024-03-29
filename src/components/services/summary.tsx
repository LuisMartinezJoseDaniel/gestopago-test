"use client";
import { Producto } from "@/interfaces/product";
import { CardBody, CardHeader, Divider } from "@nextui-org/react";
import { ShowHelp } from "./show-help";

interface Props {
  product: Producto;
  subtotal?: string;
  monto?: string;
}

export const Summary = ({ product, subtotal }: Props) => {
  return (
    <>
      <CardHeader className="flex justify-between">
        <h3>Resumen</h3>
        <ShowHelp
          showAyuda={product.attributes.showAyuda}
          legend={product.legend.cdata}
        />
      </CardHeader>
      <CardBody>
        <Divider />
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-lg flex justify-between flex-wrap">
            Producto:
            <span>
              {product.attributes.producto} {product.attributes.servicio}
            </span>
            <p className="flex justify-between w-full text-lg">
              Precio por producto:
              <span>${product.attributes.precio}</span>
            </p>
          </h3>
        </div>
      </CardBody>
    </>
  );
};
