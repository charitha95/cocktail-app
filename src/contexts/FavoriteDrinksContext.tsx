import { createContext, useState } from "react";
import { ChildrenType, Drink, FavContextType } from "../types";
import useLocalStorage from "../hooks/useLocalStorage";
import { FAVORITES_DRINKS_LS } from "../constants";
import { getStorageValue } from "../helpers/localStorageHelper";

export const FavoriteDrinksContext = createContext<FavContextType>(
  {} as FavContextType
);

export default function FavoritesProvider({
  children
}: ChildrenType): JSX.Element {
  const [favorites, setFavorites] = useState<Drink[]>(
    getStorageValue(FAVORITES_DRINKS_LS) || []
  );
  const [filteredFavorites, setFilteredFavorites] = useState<Drink[]>([]);

  const [localStorageFavorites, setLocalStorageFavorites] = useLocalStorage<
    Drink[]
  >(FAVORITES_DRINKS_LS, []);

  const addToFavorites = (drink: Drink): void => {
    const drinkExists = favorites.some(
      (favorite) => favorite.idDrink === drink.idDrink
    );

    if (!drinkExists) {
      setFavorites([...favorites, drink]);
      setLocalStorageFavorites([...localStorageFavorites, drink]);
    } else {
      throw Error("Item exists already!");
    }
  };

  const removeFromFavorites = (drink: Drink): void => {
    setFavorites(
      favorites.filter((favorite) => favorite.idDrink !== drink.idDrink)
    );
    setLocalStorageFavorites(
      localStorageFavorites.filter(
        (favorite) => favorite.idDrink !== drink.idDrink
      )
    );
  };

  const toggleFavorites = (drink: Drink): void => {
    if (favorites.filter((fav) => fav.idDrink === drink.idDrink).length > 0) {
      removeFromFavorites(drink);
    } else {
      addToFavorites(drink);
    }
  };

  const filterFavorites = (filterTerm: string): void => {
    const filtered = favorites.filter((i) =>
      i.strDrink.toLowerCase().includes(filterTerm.toLowerCase())
    );
    setFilteredFavorites(filtered);
  };

  return (
    <FavoriteDrinksContext.Provider
      value={{
        favorites,
        filteredFavorites,
        filterFavorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorites
      }}
    >
      {children}
    </FavoriteDrinksContext.Provider>
  );
}
