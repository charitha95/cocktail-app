import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { mockData, mockFavorites, mockedGridData } from "../mock";
import ResultsGrid from "../../components/ResultsGrid";

describe("ResultsGrid", () => {
  const mockHandleSearch = vi.fn();
  const mockToggleFavorite = vi.fn();

  const mockEmptyStateMessage = "No results found.";

  it("renders the search bar", () => {
    const { getByTestId } = render(
      <ResultsGrid
        favorites={mockFavorites}
        handleSearch={mockHandleSearch}
        drinks={mockData[0]}
        toggleFavorite={mockToggleFavorite}
        emptyStateMessage={mockEmptyStateMessage}
      />
    );

    expect(getByTestId("search-input")).not.toBe(null);
  });

  it("renders the drink cards when there are drinks", () => {
    const { getAllByTestId } = render(
      <ResultsGrid
        favorites={mockFavorites}
        handleSearch={mockHandleSearch}
        drinks={mockedGridData}
        toggleFavorite={mockToggleFavorite}
        emptyStateMessage={mockEmptyStateMessage}
      />
    );

    const drinkCards = getAllByTestId("drink-card");
    expect(drinkCards.length).toBe(mockedGridData.length);
  });

  it("renders the empty state message when there are no drinks", () => {
    const { getByText } = render(
      <ResultsGrid
        favorites={mockFavorites}
        handleSearch={mockHandleSearch}
        drinks={[]}
        toggleFavorite={mockToggleFavorite}
        emptyStateMessage={mockEmptyStateMessage}
      />
    );

    expect(getByText(mockEmptyStateMessage)).not.toBe(null);
  });
});
