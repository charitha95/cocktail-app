import { describe, it, expect } from "vitest";
import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";
import { mockDuplicateDrinks, mockUniqueDrinks } from "../mock";

describe("hasDuplicateDrinks", () => {
  it("returns true if there are duplicate drinks", () => {
    const result = hasDuplicateDrinks(mockDuplicateDrinks);
    expect(result).toBe(true);
  });

  it("returns false if there are no duplicate drinks", () => {
    const result = hasDuplicateDrinks(mockUniqueDrinks);
    expect(result).toBe(false);
  });
});
