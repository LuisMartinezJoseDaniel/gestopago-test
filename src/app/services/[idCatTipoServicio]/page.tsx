import { getProductList } from "@/actions";
import { RowLink } from "@/components/services";
import { filterByUniqueId } from "@/utils/filterByUniqueId";

export const metadata = {
  title: "Tipo de Servicio",
  description: "Tipo de Servicio",
};

interface Props {
  params: {
    idCatTipoServicio: string;
  };
}

export default async function ServicesPage({ params }: Props) {
  const listOfServices = await getProductList();

  const newListOfServices = filterByUniqueId(
    listOfServices,
    "idServicio"
  ).filter(
    (producto) =>
      producto.attributes.idCatTipoServicio === params.idCatTipoServicio
  );

  if (newListOfServices.length === 0)
    return (
      <h1 className="font-bold text-center">
        Sin servicios disponibles por el momento
      </h1>
    );

  const renderedListOfServices = newListOfServices.map((producto) => (
    <RowLink
      key={producto.attributes.idProducto}
      producto={producto}
      params={params}
    />
  ));

  return (
    <div>
      <h1 className="text-xl my-4 font-bold text-center">
        ¿Que deseas hacer hoy?
      </h1>
      <div className="grid md:grid-cols-2 gap-4">{renderedListOfServices}</div>
    </div>
  );
}
