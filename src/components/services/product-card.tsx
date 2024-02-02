"use client";
import { Producto } from "@/interfaces/product";
import paths from "@/paths";
import { Button, Card, CardFooter } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ShowHelp } from "./show-help";

interface Props {
  product: Producto;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();
  return (
    <Card isFooterBlurred radius="lg" className="border-none">
      <div className="flex justify-end p-2">
        <ShowHelp
          legend={product.legend.cdata}
          showAyuda={product.attributes.showAyuda}
        />
      </div>
      <div className="flex justify-center items-center h-36 bg-white/10 rounded-t-lg p-2">
        <h3 className="text-pretty text-center">
          {product.attributes.producto}
        </h3>
      </div>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny ">${product.attributes.precio}</p>
        <Button
          className="text-tiny"
          // variant="faded"
          color="primary"
          radius="lg"
          size="sm"
          type="button"
          onClick={(e) => {
            e.preventDefault();
            router.push(
              paths.servicesProductsCreate(
                product.attributes.idCatTipoServicio,
                product.attributes.idServicio,
                product.attributes.idProducto
              )
            );
          }}
        >
          Elegir
        </Button>
      </CardFooter>
    </Card>
  );
}
