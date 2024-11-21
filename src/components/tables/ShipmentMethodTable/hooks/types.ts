export type LocationResponseType = {
  codigodanelargo: string;
  poblacion: string;
  municipio: string;
}[];

export type CustomOrderType = {
  origen: string;
  destino: string;
  unidades: number;
  kilos: number;
  ancho: number;
  alto: number;
  largo: number;
  vlrdeclarado: string;
  vlrecaudo: number;
  dest_flete: 0;
  dest_comision: 0;
  operador: string;
  codigocliente: string;
  accesoapi: string;
  llaveseguridad: string;
};
