import { useState } from "react";

export const useInput = (initialValue: string) => {
  const [inputType, setInputType] = useState<string>(initialValue);

  const toggleInputType = () => {
    setInputType((prev) => (prev === "password" ? "text" : "password"));
  };

  return {
    inputType,
    toggleInputType,
  };
}
