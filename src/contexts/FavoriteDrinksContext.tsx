import { ReactNode, createContext, useState } from "react";
import { Drink } from "../types";

type FavContextType = {
  favorites: Drink[];
  addToFavorites: (item: Drink) => void;
  removeFromFavorites: (item: Drink) => void;
};

export const FavoriteDrinksContext = createContext<FavContextType>(
  {} as FavContextType
);

type FavoritesProviderProps = {
  children: ReactNode;
};

export default function FavoritesProvider({
  children
}: FavoritesProviderProps): JSX.Element {
  const [favorites, setFavorites] = useState<Drink[]>([]);

  const addToFavorites = (item: Drink): void | string => {
    const itemExists = favorites.some(
      (favorite) => favorite.idDrink === item.idDrink
    );

    if (!itemExists) {
      setFavorites([...favorites, item]);
    } else {
      throw Error("Item exists already!");
    }
  };

  const removeFromFavorites = (item: Drink): void => {
    setFavorites(
      favorites.filter((favorite) => favorite.idDrink !== item.idDrink)
    );
  };

  return (
    <FavoriteDrinksContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteDrinksContext.Provider>
  );
}
