import { getProductList } from "@/actions";
import ProductCard from "@/components/services/product-card";
import paths from "@/paths";
import Link from "next/link";

interface Props {
  params: {
    idServicio: string;
  };
}

export default async function ProductsPage({ params }: Props) {
  const listOfProducts = await getProductList();

  const listOfServices = listOfProducts
    .filter((producto) => producto.attributes.idServicio === params.idServicio)
    .sort(
      (a, b) =>
        Number(a.attributes.idProducto) - Number(b.attributes.idProducto)
    );

  const renderedListOfServices = listOfServices.map((producto) => (
    <div key={producto.attributes.idProducto}>
      <Link
        href={paths.servicesProductsCreate(
          producto.attributes.idCatTipoServicio,
          producto.attributes.idServicio,
          producto.attributes.idProducto
        )}
      >
        <ProductCard product={producto} />
      </Link>
    </div>
  ));

  return (
    <div>
      <h1 className="my-4 text-center font-bold">Elige tu producto</h1>
      <div className="grid md:grid-cols-4 gap-4">{renderedListOfServices}</div>
    </div>
  );
}
