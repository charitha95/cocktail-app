import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Drink } from "../../types";
import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import FavoritesDrinks from "../FavoritesDrinks";
import { BASE_URL } from "../../constants";

export default function SearchResults(): JSX.Element {
  const { search } = useParams();

  const { addToFavorites } = useContext(FavoriteDrinksContext);

  const url = `${BASE_URL}/search.php?s=${search}`;

  const { data, isLoading, error } = useFetchData(url);

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
      console.log("---");
      console.log(drink);
      console.log("---");
      addToFavorites(drink);
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <div>
      <h1>Search Items</h1>
      <ul>
        {drinks &&
          drinks.map((drink) => (
            <li key={drink.idDrink}>
              {drink.strDrink}
              <button
                onClick={() => {
                  handleAdd(drink);
                }}
              >
                add
              </button>
            </li>
          ))}
      </ul>
      <FavoritesDrinks />
    </div>
  );
}
