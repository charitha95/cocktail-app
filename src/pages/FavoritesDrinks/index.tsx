import { useContext, useState } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { Drink } from "../../types";
import ResultsGrid from "../../components/ResultsGrid";

export default function FavoritesDrinks(): JSX.Element {
  const { favorites, removeFromFavorites, filterFavorites, filteredFavorites } =
    useContext(FavoriteDrinksContext);
  const [searchTerm, setSearchTerm] = useState("");
  const handleRemove = (drink: Drink): void => {
    removeFromFavorites(drink);
  };

  const handleSearch = (searchValue: string): void => {
    setSearchTerm(searchValue);
    filterFavorites(searchValue);
  };

  return (
    <ResultsGrid
      favorites={favorites}
      drinks={
        searchTerm && filteredFavorites.length > 0
          ? filteredFavorites
          : favorites
      }
      handleSearch={handleSearch}
      toggleFavorite={handleRemove}
      emptyStateMessage="No favorites found :("
    />
  );
}
