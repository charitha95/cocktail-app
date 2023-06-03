import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Drink } from "../../types";
import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { BASE_URL } from "../../constants";
import ResultsGrid from "../../components/ResultsGrid";

export default function SearchResults(): JSX.Element {
  const { search } = useParams();

  const url = `${BASE_URL}/search.php?s=${search}`;

  const { data, isLoading, error } = useFetchData(url);

  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoriteDrinksContext
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data[0];

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

  const toggleFav = (drink: Drink): void => {
    try {
      if (favorites.filter((fav) => fav.idDrink === drink.idDrink).length > 0) {
        removeFromFavorites(drink);
      } else {
        addToFavorites(drink);
      }
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <ResultsGrid
      favorites={favorites}
      drinks={drinks}
      handleSearch={handleSearch}
      toggleFavorite={toggleFav}
    />
  );
}
