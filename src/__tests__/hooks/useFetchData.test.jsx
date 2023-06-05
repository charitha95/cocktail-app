import { renderHook, waitFor } from "@testing-library/react";
import useFetchData from "../../hooks/useFetchData";
import { describe, it, expect } from "vitest";

describe("useFetchData", () => {
  const mockData = {
    drinks: [
      {
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "https://example.com/mojito.jpg",
        idDrink: "1"
      }
    ]
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it("fetches data successfully", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));

    const { result } = renderHook(() => useFetchData(""));
    await waitFor(() => {
      expect(result.current.data[0]).toEqual(mockData.drinks);
    });
  });
});
