import { useState, useEffect, useCallback } from "react";
import { Drink, CocktailData, fetchDataType } from "../types";

/**
 * Custom hook to fetch data
 * @param url url of the endpoint
 * @param count how many times it should call the endpoint
 * @returns fetched data and other related variables
 */
export default function useFetchData(url: string, count = 1): fetchDataType {
  const [data, setData] = useState<Drink[][]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (newUrl = ""): Promise<void> => {
      setIsLoading(true);
      setError(null);

      try {
        const requests = Array.from({ length: count }).map(async () => {
          const response = await fetch(newUrl || url);
          if (!response.ok) {
            throw new Error("Something went wrong! Please try again.");
          }
          const jsonData = await response.json();
          return jsonData;
        });

        const responseData = await Promise.all<CocktailData>(requests);
        const formatedData = responseData.map((i) => i.drinks);

        setData(formatedData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [url, count]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
}
