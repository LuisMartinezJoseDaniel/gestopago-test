import { getProductById } from "@/actions/get-product-by-id";
import { Summary } from "@/components";
import { ProductForm } from "@/components/services/product-form";
import { ServiceRedeemForm } from "@/components/services/service-form";
import { ShowHelp } from "@/components/services/show-help";
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
      <div className="grid md:grid-cols-2 gap-4">
        {!isRedeemableItem ? (
          <ProductForm product={product} title="Ingrese los datos" />
        ) : null}

        <Card className="p-2">
          <Summary product={product} />
          {isRedeemableItem ? <ServiceRedeemForm product={product} /> : null}
        </Card>

        <ShowHelp
          showAyuda={product.attributes.showAyuda}
          legend={product.legend.cdata}
        />
      </div>
    </div>
  );
}
