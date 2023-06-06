import { renderHook } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";
import FavoritesProvider, {
  FavoriteDrinksContext
} from "../../contexts/FavoriteDrinksContext";
import { mockedDrink } from "../mock";
import { act } from "react-dom/test-utils";
import { useContext } from "react";
import { ChildrenType } from "../../types";

describe("FavoriteDrinksContext", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("adds a drink to favorites", () => {
    const wrapper = ({ children }: ChildrenType): JSX.Element => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );

    const { result } = renderHook(() => useContext(FavoriteDrinksContext), {
      wrapper
    });

    act(() => {
      result.current.addToFavorites(mockedDrink);
    });

    expect(result.current.favorites).toContain(mockedDrink);
  });

  it("adds another drink to favorites", () => {
    const wrapper = ({ children }: ChildrenType): JSX.Element => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );

    const { result } = renderHook(() => useContext(FavoriteDrinksContext), {
      wrapper
    });

    act(() => {
      result.current.addToFavorites({ ...mockedDrink, idDrink: "2" });
    });

    expect(result.current.favorites).toContainEqual({
      ...mockedDrink,
      idDrink: "2"
    });
  });

  it("adds an existing drink to favorites", () => {
    const wrapper = ({ children }: ChildrenType): JSX.Element => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );

    const { result } = renderHook(() => useContext(FavoriteDrinksContext), {
      wrapper
    });

    try {
      act(() => {
        result.current.addToFavorites({ ...mockedDrink, idDrink: "2" });
      });
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toBe("Item exists already!");
      }
    }
  });

  it("removes a drink from favorites", () => {
    const wrapper = ({ children }: ChildrenType): JSX.Element => (
      <FavoritesProvider>{children}</FavoritesProvider>
    );

    const { result } = renderHook(() => useContext(FavoriteDrinksContext), {
      wrapper
    });

    act(() => {
      result.current.removeFromFavorites(mockedDrink);
    });

    expect(result.current.favorites).not.toContain(mockedDrink);
  });
});
