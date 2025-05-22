const isProduction = import.meta.env.MODE === "production";

export const TE_ENTREGO_API_URL = isProduction
  ? import.meta.env.VITE_TE_ENTREGO_PRODUCTION_API_URL
  : import.meta.env.VITE_TE_ENTREGO_DEVELOPMENT_API_URL;
