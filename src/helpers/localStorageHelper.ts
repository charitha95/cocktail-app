/**
 * Function to retrieve locally saved form data
 * @param key key of the localStorage value pair
 * @returns the ls value for the given key
 */
export function getStorageValue<T>(key: string): T {
  const storedData = localStorage.getItem(key);
  let initial;
  if (storedData) {
    initial = JSON.parse(storedData);
  }
  return initial;
}

/**
 * Function to clear locally saved data
 * @param key key of the localStorage value pair
 */
export function clearStorage(key: string): void {
  localStorage.removeItem(key);
}
