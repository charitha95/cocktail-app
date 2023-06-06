import { Drink } from "../types";

/**
 * Helper function to search the cache and retrieve cached data if it's still valid.
 * @param cacheKey The key to identify the cached data in the local storage.
 * @param currentTime The current timestamp in milliseconds.
 * @returns The cached data if it's still valid, otherwise returns undefined.
 */

export default function searchCacheHelper(
  cacheKey: string,
  currentTime: number
): void | Drink[][] {
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);
  // 5 (minutes) by 60 (seconds) by 1000 (milliseconds)
  const cacheDuration = 5 * 60 * 1000;

  if (cachedData && cachedTimestamp) {
    const parsedData = JSON.parse(cachedData) as Drink[][];
    if (currentTime - +cachedTimestamp <= cacheDuration) {
      return parsedData;
    }
  }
}
