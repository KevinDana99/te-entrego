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
