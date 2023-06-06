import { useState, useEffect, useCallback } from "react";
import { Drink, CocktailData, fetchDataType } from "../types";
import searchCacheHelper from "../helpers/searchCacheHelper";

/**
 * Custom hook to fetch data
 * @param url url of the endpoint
 * @param count how many times it should call the endpoint
 * @returns fetched data and other related variables
 */
export default function useFetchData(
  url: string,
  count = 1,
  useCache = false
): fetchDataType {
  const [data, setData] = useState<Drink[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (newUrl = ""): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const cacheKey = newUrl || url;
        const currentTime = Date.now();

        // check whether there's any cached data
        if (useCache) {
          const cachedData = searchCacheHelper(cacheKey, currentTime);
          if (cachedData) {
            setData(cachedData);
            return;
          }
        }

        const requests = Array.from({ length: count }).map(async () => {
          const response = await fetch(cacheKey);
          if (!response.ok) {
            throw new Error("Something went wrong! Please try again.");
          }
          const jsonData = await response.json();
          return jsonData;
        });

        const responseData = await Promise.all<CocktailData>(requests);
        const formattedData = responseData.map((i) => i.drinks);

        if (useCache) {
          localStorage.setItem(cacheKey, JSON.stringify(formattedData));
          localStorage.setItem(`${cacheKey}_timestamp`, currentTime.toString());
        }
        setData(formattedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [url, count, useCache]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
}
