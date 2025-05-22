/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_MAPBOX_TOKEN?: string;
  // agregá acá otras variables con prefijo VITE_ que uses
}

interface ImportMeta {
  env: ImportMetaEnv;
}
