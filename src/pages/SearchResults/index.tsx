import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Drink } from "../../types";
import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import FavoritesDrinks from "../FavoritesDrinks";
import { BASE_URL } from "../../constants";
import classes from "./style.module.scss";

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

  const handleAdd = (drink: Drink): void => {
    try {
      addToFavorites(drink);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  const renderActionButton = (drink: Drink): JSX.Element => {
    if (favorites.filter((fav) => fav.idDrink === drink.idDrink).length > 0) {
      return (
        <button
          onClick={() => {
            removeFromFavorites(drink);
          }}
        >
          remove
        </button>
      );
    } else
      return (
        <button
          onClick={() => {
            handleAdd(drink);
          }}
        >
          add
        </button>
      );
  };

  return (
    <div>
      <h1 className={classes.title}>Search Items</h1>
      <ul>
        {drinks &&
          drinks.map((drink) => (
            <li key={drink.idDrink}>
              {drink.strDrink}
              {renderActionButton(drink)}
            </li>
          ))}
      </ul>
      <FavoritesDrinks />
    </div>
  );
}
