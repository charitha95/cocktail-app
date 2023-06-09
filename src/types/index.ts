import { ReactNode } from "react";

export type Drink = {
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type CocktailData = {
  drinks: Drink[];
};

export type FavContextType = {
  filteredFavorites: Drink[];
  filterFavorites: (term: string) => void;
  favorites: Drink[];
  addToFavorites: (item: Drink) => void;
  removeFromFavorites: (item: Drink) => void;
  toggleFavorites: (item: Drink) => void;
};

export type ChildrenType = {
  children: ReactNode;
};

export type fetchDataType = {
  data: Drink[][];
  isLoading: boolean;
  error: string | null;
  fetchData: (newUrl?: string) => Promise<void>;
};
