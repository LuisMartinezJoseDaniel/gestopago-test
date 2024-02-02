export interface PayloadSendTx {
  idProducto: number;
  idServicio: number;
  idSucursal?: string;
  telefono: string;
  horaLocal: string;
  referencia?: string;
  montoPago?: number;
  upc: string;
  unidad: string;
}
