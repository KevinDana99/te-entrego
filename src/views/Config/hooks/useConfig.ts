import { useEffect, useState } from "react";

type ConfigType = {
  operator: string;
  public_key: string;
  secret_key: string;
  platform_secret_key: string;
  platform_public_key: string;
};

const DEFAULT_CONFIG = {
  operator: "te-entrego",
  public_key: "",
  secret_key: "",
  platform_public_key: "",
  platform_secret_key: "",
};

const useConfig = () => {
  const [showInput, setShowInput] = useState({
    secret: false,
    platform_secret: false,
  });
  const [showAlert, setShowAlert] = useState<
    | {
        value: string;
        theme: "success" | "primary";
      }
    | false
  >(false);
  const prevConfig = localStorage.getItem("config")
    ? localStorage.getItem("config")
    : null;
  const [config, setConfig] = useState<ConfigType>(
    prevConfig ? JSON.parse(prevConfig) : DEFAULT_CONFIG
  );
  const handleShowInput = (
    value: Partial<{ secret: boolean; platform_secret: boolean }>
  ) => {
    setShowInput({
      ...showInput,
      ...value,
    });
  };
  const handleCopyTextInput = (text: keyof ConfigType) => {
    navigator.clipboard
      .writeText(config[`${text}`])
      .then(() => {
        console.log("Texto copiado al portapapeles: ", text);
      })
      .catch((error) => {
        console.error("Error al copiar el texto: ", error);
      });

    const changeAlertState = () => {
      setShowAlert({ value: "Copiado en portapapeles", theme: "primary" });
      setTimeout(() => setShowAlert(false), 3000);
    };

    changeAlertState();
  };
  const handleSaveConfig = () => {
    localStorage.setItem("config", JSON.stringify(config));
    setShowAlert({
      value: "Se guardo tu configuracion correctamente",
      theme: "success",
    });
  };

  const handleOnChangeConfig = (newConfig: Partial<ConfigType>) => {
    setConfig({ ...config, ...newConfig });
    setShowAlert(false);
  };

  const handleLoadDefaultConfig = () => {
    localStorage.setItem("config", JSON.stringify(config));
  };

  useEffect(() => {
    handleLoadDefaultConfig();
  }, []);
  const options = [
    {
      name: "Te-Entrego",
      value: "te-entrego",
    },

    {
      name: "TCC",
      value: "tcc",
    },

    {
      name: "Coordinadora",
      value: "coordinadora",
    },

    {
      name: "Envia",
      value: "envia",
    },
  ];

  return {
    handleCopyTextInput,
    handleShowInput,
    handleSaveConfig,
    handleOnChangeConfig,
    showInput,
    config,
    options,
    showAlert,
  };
};

export default useConfig;
