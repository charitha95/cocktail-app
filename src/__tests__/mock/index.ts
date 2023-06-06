import { vi } from "vitest";
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

export const mockData = [
  [
    {
      idDrink: "1",
      strDrink: "Drink 1",
      strCategory: "Category 1",
      strDrinkThumb: "drink1.jpg"
    }
  ],
  [
    {
      idDrink: "2",
      strDrink: "Drink 2",
      strCategory: "Category 2",
      strDrinkThumb: "drink2.jpg"
    }
  ],
  [
    {
      idDrink: "3",
      strDrink: "Drink 3",
      strCategory: "Category 3",
      strDrinkThumb: "drink3.jpg"
    }
  ]
];

export const mockedGridData = [
  {
    idDrink: "1",
    strDrink: "Drink 1",
    strCategory: "Category 1",
    strDrinkThumb: "drink1.jpg"
  },
  {
    idDrink: "2",
    strDrink: "Drink 2",
    strCategory: "Category 2",
    strDrinkThumb: "drink2.jpg"
  },
  {
    idDrink: "3",
    strDrink: "Drink 3",
    strCategory: "Category 3",
    strDrinkThumb: "drink3.jpg"
  }
];

export const mockFavorites = [
  {
    idDrink: "1",
    strDrink: "Drink 1",
    strCategory: "Category 1",
    strDrinkThumb: "drink1.jpg"
  },
  {
    idDrink: "3",
    strDrink: "Drink 3",
    strCategory: "Category 3",
    strDrinkThumb: "drink3.jpg"
  }
];

export const mockContextValue = {
  favorites: mockFavorites,
  toggleFavorites: vi.fn(),
  addToFavorites: vi.fn(),
  removeFromFavorites: vi.fn(),
  filteredFavorites: mockFavorites,
  filterFavorites: vi.fn()
};

export const mockFavContextDefaultValue = {
  favorites: [],
  toggleFavorites: vi.fn(),
  addToFavorites: vi.fn(),
  removeFromFavorites: vi.fn(),
  filteredFavorites: [],
  filterFavorites: vi.fn()
};
