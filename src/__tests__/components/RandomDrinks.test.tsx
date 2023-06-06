import { expect, describe, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import RandomDrinks from "../../components/RandomDrinks";
import { mockContextValue, mockData, mockFavorites } from "../mock";

describe("RandomDrinks", () => {
  const mockFetchData = vi.fn();

  const MockFavoriteDrinksContextProvider = ({
    children
  }: {
    children: React.ReactNode;
  }): JSX.Element => {
    return (
      <FavoriteDrinksContext.Provider value={mockContextValue}>
        {children}
      </FavoriteDrinksContext.Provider>
    );
  };

  it("renders loading skeleton when isLoading is true", () => {
    const { getAllByTestId } = render(
      <RandomDrinks
        data={[]}
        isLoading={true}
        error={null}
        fetchData={mockFetchData}
      />,
      { wrapper: MockFavoriteDrinksContextProvider }
    );

    const skeletonElements = getAllByTestId("drink-card-skeleton");
    expect(skeletonElements.length).toBe(5);
  });

  it("renders an error message when error is present", () => {
    const errorMessage = "Something went wrong!";
    const { getByText } = render(
      <RandomDrinks
        data={[]}
        isLoading={false}
        error={errorMessage}
        fetchData={mockFetchData}
      />,
      { wrapper: MockFavoriteDrinksContextProvider }
    );

    const errorElement = getByText(`Error: ${errorMessage}`);
    expect(errorElement).not.toBeNull();
  });

  it("renders drink cards correctly with favorite status", () => {
    const { getAllByTestId } = render(
      <RandomDrinks
        data={mockData}
        isLoading={false}
        error={null}
        fetchData={mockFetchData}
      />,
      { wrapper: MockFavoriteDrinksContextProvider }
    );

    const drinkCardElements = getAllByTestId("drink-card");
    expect(drinkCardElements.length).toBe(mockData.length);

    drinkCardElements.forEach((cardElement, index) => {
      const imgElement = cardElement.querySelector("img");
      const nameElement = cardElement.querySelector("p:nth-child(1)");
      const categoryElement = cardElement.querySelector("p:nth-child(2)");
      const likeIconElement = cardElement.querySelector(
        'img[data-testid="like-icon"]'
      );

      if (imgElement) {
        expect(imgElement.getAttribute("src")).toBe(
          mockData[index][0].strDrinkThumb
        );

        expect(imgElement.getAttribute("alt")).toBe("drink-card");
      }

      if (nameElement)
        expect(nameElement.textContent).toBe(mockData[index][0].strDrink);

      if (categoryElement)
        expect(categoryElement.textContent).toBe(
          mockData[index][0].strCategory
        );

      const isFavorite = mockFavorites.some(
        (fav) => fav.idDrink === mockData[index][0].idDrink
      );

      const expectedLikeIconSrc = isFavorite
        ? "heart-clr.svg"
        : "heart-otl.svg";

      if (likeIconElement)
        expect(likeIconElement.getAttribute("src")).toBe(expectedLikeIconSrc);
    });
  });

  it("calls toggleFavorites when heart icon is clicked", () => {
    const spyToggleFavorites = vi.fn();
    const { getAllByTestId } = render(
      <RandomDrinks
        data={mockData}
        isLoading={false}
        error={null}
        fetchData={mockFetchData}
      />,
      {
        wrapper: ({ children }) => (
          <FavoriteDrinksContext.Provider
            value={{ ...mockContextValue, toggleFavorites: spyToggleFavorites }}
          >
            {children}
          </FavoriteDrinksContext.Provider>
        )
      }
    );

    const likeIconElements = getAllByTestId("drink-card-like");
    fireEvent.click(likeIconElements[0]);
    expect(spyToggleFavorites).toHaveBeenCalledTimes(1);
    expect(spyToggleFavorites).toHaveBeenCalledWith(mockData[0][0]);
  });
});
