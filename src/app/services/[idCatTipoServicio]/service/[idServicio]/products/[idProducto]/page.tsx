import { getProductById } from "@/actions/get-product-by-id";
import { Summary } from "@/components";
import { ProductForm } from "@/components/services/product-form";
import { ServiceRedeemForm } from "@/components/services/service-form";
import { Card } from "@nextui-org/react";
import { notFound } from "next/navigation";

interface Props {
  params: {
    idProducto: string;
  };
}

export default async function CreateProductTransactionPage({ params }: Props) {
  const product = await getProductById(params.idProducto);

  if (!product) notFound();

  const isRedeemableItem =
    product.attributes.idCatTipoServicio === "10" ||
    product.attributes.idCatTipoServicio === "11";

  return (
    <div>
      <div className="flex gap-2 justify-center flex-wrap items-stretch">
        {!isRedeemableItem ? (
          <div className="w-full md:w-2/6">
            <ProductForm product={product} title="Ingrese los datos" />
          </div>
        ) : null}
        <div className="md:w-3/6 h-full">
          <Card className="p-2">
            <Summary product={product} />
            {isRedeemableItem ? <ServiceRedeemForm product={product} /> : null}
          </Card>
        </div>
      </div>
    </div>
  );
}
