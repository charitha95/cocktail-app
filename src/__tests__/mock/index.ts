import { Drink } from "../../types";

export const mockedDrink = {
  strDrink: "Mojito",
  strCategory: "Cocktail",
  strDrinkThumb: "https://www.thecocktaildb.com/images/media/mojito-image.jpg",
  idDrink: "1"
} as Drink;

const mockProperties = {
  strCategory: "",
  strDrinkThumb: "",
  strDrink: ""
};

export const mockDuplicateDrinks = [
  { idDrink: "1", ...mockProperties },
  { idDrink: "2", ...mockProperties },
  { idDrink: "1", ...mockProperties },
  { idDrink: "3", ...mockProperties }
];
export const mockUniqueDrinks = [
  { idDrink: "1", ...mockProperties },
  { idDrink: "2", ...mockProperties },
  { idDrink: "3", ...mockProperties },
  { idDrink: "4", ...mockProperties }
];
