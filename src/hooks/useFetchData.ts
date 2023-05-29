import { useState, useEffect, useCallback } from "react";
import { Cocktail, CocktailData } from "../types";

type fetchData = {
  data: Cocktail[];
  isLoading: boolean;
  error: string | null;
  fetchData: () => Promise<void>;
};

function useFetchData(url: string, count = 1): fetchData {
  const [data, setData] = useState<Cocktail[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const requests = Array.from({ length: count }).map(async () => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Something went wrong! Please try again.`);
        }
        const jsonData = await response.json();
        return jsonData;
      });

      const responseData = await Promise.all<CocktailData>(requests);
      const formatedData = responseData.map((i) => i.drinks[0]);

      setData(formatedData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }, [url, count]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, fetchData };
}

export default useFetchData;
