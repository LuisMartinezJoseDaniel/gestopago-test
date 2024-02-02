const paths = {
  // Home Page with balance and list of services
  home: () => "/",

  // List of services related to a specific type of service
  servicesShow: (idCatTipoServicio: string) => `/services/${idCatTipoServicio}`,

  // List products related to a specific service
  servicesProductsShow: (idCatTipoServicio: string, idServicio: string) =>
    `/services/${idCatTipoServicio}/service/${idServicio}/products`,

  // Create a new product transaction related to a specific service
  servicesProductsCreate: (
    idCatTipoServicio: string,
    idServicio: string,
    idProducto: string
  ) =>
    `/services/${idCatTipoServicio}/service/${idServicio}/products/${idProducto}`,
};

export default paths;
