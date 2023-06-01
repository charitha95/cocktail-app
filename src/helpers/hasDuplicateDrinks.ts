import { Drink } from "../types";

/**
 * Function to check for duplicate items in drinks array
 * @param drinks drinks array as the input
 * @returns boolean based on condition
 */
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
