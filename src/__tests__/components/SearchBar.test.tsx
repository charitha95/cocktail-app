import { expect, describe, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";

describe("SearchBar", () => {
  it("calls handleSearch when Enter key is pressed", () => {
    const handleSearchMock = vi.fn();
    const { getByTestId } = render(
      <SearchBar handleSearch={handleSearchMock} />
    );
    const inputElement = getByTestId("search-input");

    fireEvent.keyDown(inputElement, { key: "Enter" });

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
    expect(handleSearchMock).toHaveBeenCalledWith(inputElement);
  });

  it("calls handleSearch when search button is clicked", () => {
    const handleSearchMock = vi.fn();
    const { getByAltText, getByTestId } = render(
      <SearchBar handleSearch={handleSearchMock} />
    );
    const inputElement = getByTestId("search-input");
    const searchButtonElement = getByAltText("search-btn");

    fireEvent.change(inputElement, { target: { value: "margarita" } });
    fireEvent.click(searchButtonElement);

    expect(handleSearchMock).toHaveBeenCalledTimes(1);
    expect(handleSearchMock).toHaveBeenCalledWith("margarita");
  });
});
