import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getStorageValue } from "../helpers/localStorageHelper";

/**
 * Custom hook to save into the localStorage
 * @param key key of the localStorage value pair
 * @param defaultValue default value if given key doesn't exists
 * @returns tuple of the value and it's setter
 */
export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(getStorageValue(key) || defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
