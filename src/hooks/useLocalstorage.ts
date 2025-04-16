import { useEffect, useState } from "react";

export const useLocalstorage = <T,>(key: string, initialValue: T) => {
  const [data, setData] = useState<T>(initialValue);

  useEffect(() => {
    const res = localStorage.getItem(key);
    if (res) {
      const parsedData = JSON.parse(res) as T;
      setData(parsedData);
    }
  }, [key]);

  const saveData = (newData: T) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData] as const;
};
