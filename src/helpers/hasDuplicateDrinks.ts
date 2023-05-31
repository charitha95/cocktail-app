import { Drink } from "../types";

export default function hasDuplicateDrinks(drinks: Drink[]): boolean {
  const idSet = new Set();

  for (const drink of drinks) {
    const id = drink.idDrink;

    if (idSet.has(id)) {
      return true;
    }

    idSet.add(id);
  }

  return false;
}
