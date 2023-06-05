import { renderHook, waitFor, act } from "@testing-library/react";
import useFetchData from "../../hooks/useFetchData";
import { describe, it, expect } from "vitest";

describe("useFetchData", () => {
  const mockData = {
    drinks: [
      {
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "https://cocktail.com/mojito.jpg",
        idDrink: "1"
      }
    ]
  };

  beforeEach(() => {
    fetch.resetMocks();
  });

  it("fetches data successfully", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const { result } = renderHook(() =>
      useFetchData("https://cocktail.com/api/v1/")
    );

    await waitFor(() => {
      expect(result.current.data[0]).toEqual(mockData.drinks);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("handles fetch error", async () => {
    const errorMessage = "Error message";
    fetch.mockRejectOnce(new Error(errorMessage));
    const { result } = renderHook(() =>
      useFetchData("https://cocktail.com/api/v1/")
    );

    await waitFor(() => {
      expect(result.current.data).toEqual([]);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBe(errorMessage);
    });
  });

  it("fetches data multiple (5) times", async () => {
    fetch
      .mockResponseOnce(JSON.stringify(mockData))
      .mockResponseOnce(JSON.stringify(mockData))
      .mockResponseOnce(JSON.stringify(mockData))
      .mockResponseOnce(JSON.stringify(mockData))
      .mockResponseOnce(JSON.stringify(mockData));
    const { result } = renderHook(() =>
      useFetchData("https://cocktail.com/api/v1/", 5)
    );

    await waitFor(() => {
      expect(result.current.data).toEqual([
        mockData.drinks,
        mockData.drinks,
        mockData.drinks,
        mockData.drinks,
        mockData.drinks
      ]);
      expect(result.current.isLoading).toBe(false);
      expect(result.current.error).toBeNull();
    });
  });

  it("re-fetches data when calling fetchData", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockData));
    const { result } = renderHook(() =>
      useFetchData("https://cocktail.com/api/v1/")
    );

    await waitFor(() => {
      expect(result.current.data[0]).toEqual(mockData.drinks);
    });

    act(() => {
      result.current.fetchData();
    });

    expect(result.current.data[0]).toEqual(mockData.drinks);
  });
});
