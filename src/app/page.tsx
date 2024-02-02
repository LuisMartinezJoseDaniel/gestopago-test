import ServicesList from "@/components/services/services-list";
import { Balance } from "@/components/ui/balance";

export const metadata = {
  title: "Lista de Servicios ",
  description: "Lista de Servicios",
};

export default function Home() {
  return (
    <div className="grid  md:grid-cols-4 gap-4 p-4">
      <div className="w-full ">
        <Balance />
      </div>
      <div className="border shadow py-3 px-2 md:col-span-3 relative">
        <h3 className="text-center font-bold my-4 ">Lista de servicios</h3>

        <ServicesList />
      </div>
    </div>
  );
}
