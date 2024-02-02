interface Servicio {
  idCatTipoServicio: number;
  servicio: string;
  description?: string;
}

interface SeedData {
  servicios: Servicio[];
}

export const initialData: SeedData = {
  servicios: [
    {
      idCatTipoServicio: 1,
      servicio: "Movistar",
    },
    {
      idCatTipoServicio: 2,
      servicio: "Telcel",
    },
    {
      idCatTipoServicio: 3,
      servicio: "AT&T",
    },
    {
      idCatTipoServicio: 4,
      servicio: "Unefon",
    },
    {
      idCatTipoServicio: 5,
      servicio: "Pago de Servicios",
    },
    {
      idCatTipoServicio: 6,
      servicio: "Nextel",
    },
    {
      idCatTipoServicio: 7,
      servicio: "Pago de Impuestos / Gobierno",
    },
    {
      idCatTipoServicio: 8,
      servicio: "Productos Financieros",
    },
    {
      idCatTipoServicio: 9,
      servicio: "Productos por Catálogo",
    },
    {
      idCatTipoServicio: 10,
      servicio: "Servicios de Prepago",
      description: "Redeemable Item",
    },
    {
      idCatTipoServicio: 11,
      servicio: "Entretenimiento",
      description: "Redeemable Item",
    },
    {
      idCatTipoServicio: 12,
      servicio: "Virgin",
    },
    {
      idCatTipoServicio: 13,
      servicio: "Otras Recargas",
    },
    {
      idCatTipoServicio: 14,
      servicio: "Venta de Seguros",
    },
    {
      idCatTipoServicio: 15,
      servicio: "Pago de Derechos de Agua",
    },
    {
      idCatTipoServicio: 16,
      servicio: "Juegos y Sorteos",
    },
    {
      idCatTipoServicio: 17,
      servicio: "MazTiempo",
    },
    {
      idCatTipoServicio: 18,
      servicio: "Servicios de Autopistas y Transportes",
    },
    {
      idCatTipoServicio: 19,
      servicio: "Internet de prepago",
    },
  ],
};
