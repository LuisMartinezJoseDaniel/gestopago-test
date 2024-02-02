export const revalidate = 86400; // Revalidate at most once per day

import { getListOfServices } from "@/actions/get-list-of-services";
import paths from "@/paths";
import { Card, CardBody } from "@nextui-org/react";
import Link from "next/link";

export default async function ServicesList() {
  const listOfServices = await getListOfServices();

  if (listOfServices.length === 0) return <h1>Sin servicios disponibles</h1>;

  const renderedListOfServices = listOfServices.map((producto) => (
    <div key={producto.idCatTipoServicio}>
      <Link href={paths.servicesShow(`${producto.idCatTipoServicio}`)}>
        <Card className="p-4">
          <CardBody>
            <h3 className="font-bold">{producto.service}</h3>
          </CardBody>
        </Card>
      </Link>
    </div>
  ));

  return (
    <div className="grid md:grid-cols-2 gap-2">{renderedListOfServices}</div>
  );
}
