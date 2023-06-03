import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { Drink } from "../../types";
import ResultsGrid from "../../components/ResultsGrid";

export default function FavoritesDrinks(): JSX.Element {
  const { favorites, removeFromFavorites } = useContext(FavoriteDrinksContext);

  const handleRemove = (drink: Drink): void => {
    removeFromFavorites(drink);
  };

  const handleSearch = (searchValue: HTMLInputElement | null): void => {
    if (searchValue) {
      const value = searchValue.value;
      if (!value) {
        alert("search value cannot be empty!");
        return;
      }
      // implement search here
    }
  };

  return (
    <ResultsGrid
      favorites={favorites}
      drinks={favorites}
      handleSearch={handleSearch}
      toggleFavorite={handleRemove}
    />
  );
}
