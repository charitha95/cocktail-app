import { describe, it, expect } from "vitest";
import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";

const mockProperties = {
  strCategory: "",
  strDrinkThumb: "",
  strDrink: ""
};

describe("hasDuplicateDrinks", () => {
  const mockDuplicateDrinks = [
    { idDrink: "1", ...mockProperties },
    { idDrink: "2", ...mockProperties },
    { idDrink: "1", ...mockProperties },
    { idDrink: "3", ...mockProperties }
  ];
  const mockUniqueDrinks = [
    { idDrink: "1", ...mockProperties },
    { idDrink: "2", ...mockProperties },
    { idDrink: "3", ...mockProperties },
    { idDrink: "4", ...mockProperties }
  ];

  it("returns true if there are duplicate drinks", () => {
    const result = hasDuplicateDrinks(mockDuplicateDrinks);
    expect(result).toBe(true);
  });

  it("returns false if there are no duplicate drinks", () => {
    const result = hasDuplicateDrinks(mockUniqueDrinks);
    expect(result).toBe(false);
  });
});
