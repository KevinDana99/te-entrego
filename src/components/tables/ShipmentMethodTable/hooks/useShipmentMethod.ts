import { useState } from "react";
import { ShipmentTableType } from "../types";

const useShipmentMethod = (data: ShipmentTableType["data"]) => {
  const handleLoadConfig = () => {
    const storedConfig = localStorage.getItem("config");
    const config = storedConfig ? JSON.parse(storedConfig) : {};
    const operator = config.operator;
    const getPosition = data.findIndex(
      (el) => el.operator.toLowerCase() === operator
    );
    return getPosition;
  };
  const [selectedMethod, setSelectedMethod] = useState<number | null>(
    handleLoadConfig()
  );
  const handleSelectedMethod = (index: number) => {
    setSelectedMethod(index);
  };

  return { selectedMethod, handleSelectedMethod };
};

export default useShipmentMethod;
