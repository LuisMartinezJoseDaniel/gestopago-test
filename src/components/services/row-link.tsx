import { Producto } from "@/interfaces/product";
import paths from "@/paths";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";
interface Props {
  producto: Producto;
  params: {
    idCatTipoServicio: string;
  };
}

export const RowLink = ({ producto, params }: Props) => {
  return (
    <Link
      href={paths.servicesProductsShow(
        params.idCatTipoServicio,
        producto.attributes.idServicio
      )}
    >
      <Card>
        <CardBody>
          <p>{producto.attributes.servicio}</p>
        </CardBody>
      </Card>
    </Link>
  );
};
