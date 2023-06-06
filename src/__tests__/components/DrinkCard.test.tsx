import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { mockedDrink } from "../mock";
import DrinkCard from "../../components/DrinkCard";

describe("Header", () => {
  it("renders the drink card correctly", () => {
    const toggleFavorite = vi.fn();
    const { getByTestId } = render(
      <DrinkCard
        isFav={false}
        cssClasses="custom-card"
        drink={mockedDrink}
        toggleFavorite={toggleFavorite}
      />
    );

    const cardElement = getByTestId("drink-card");
    expect(cardElement).not.toBeNull();

    const imgElement = getByTestId("drink-card-img");
    expect(imgElement).not.toBeNull();

    const nameElement = getByTestId("drink-card-name");
    expect(nameElement).not.toBeNull();

    const categoryElement = getByTestId("drink-card-category");
    expect(categoryElement).not.toBeNull();

    const likeElement = getByTestId("drink-card-like");
    expect(likeElement).not.toBeNull();
  });

  it("calls toggleFavorite function when the heart icon is clicked", () => {
    const toggleFavorite = vi.fn();
    const { getByTestId } = render(
      <DrinkCard
        isFav={false}
        cssClasses="custom-card"
        drink={mockedDrink}
        toggleFavorite={toggleFavorite}
      />
    );

    const heartIcon = getByTestId("drink-card-like");
    fireEvent.click(heartIcon);

    expect(toggleFavorite).toHaveBeenCalledTimes(1);
    expect(toggleFavorite).toHaveBeenCalledWith(mockedDrink);
  });
});
