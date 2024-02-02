import prisma from "../db/index";
import { initialData } from "./servicios.seed";

async function main() {
  // Evitar que el seed se ejecute en producción
  if (process.env.NODE_ENV === "production") return;
  // 1. Borrar registros de la tabla
  await prisma.servicios.deleteMany();

  const { servicios } = initialData;

  // 2. Insertar registros en la tabla
  const servicesData = servicios.map(async (service) => {
    await prisma.servicios.create({
      data: {
        idCatTipoServicio: service.idCatTipoServicio,
        service: service.servicio,
        description: service.description,
      },
    });
  });

  console.log("Seed ejecutado correctamente");
}
(() => {
  main();
})();
