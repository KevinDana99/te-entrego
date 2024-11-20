export type LocationResponseType = {
  respuesta: string;
  mensaje: string;
  lista: [
    {
      codigodanelargo: string;
      poblacion: string;
      municipio: string;
    }
  ];
  token: string;
};

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
