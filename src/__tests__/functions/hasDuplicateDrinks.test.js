import { describe, it, expect } from "vitest";
import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";

describe("hasDuplicateDrinks", () => {
  const mockDuplicateDrinks = [
    { idDrink: "1", name: "Mojito" },
    { idDrink: "2", name: "Cosmopolitan" },
    { idDrink: "1", name: "Margarita" },
    { idDrink: "3", name: "Negroni" }
  ];
  const mockUniqueDrinks = [
    { idDrink: "1", name: "Mojito" },
    { idDrink: "2", name: "Cosmopolitan" },
    { idDrink: "3", name: "Margarita" },
    { idDrink: "4", name: "Negroni" }
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
