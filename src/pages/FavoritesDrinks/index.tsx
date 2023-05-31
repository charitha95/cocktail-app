import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { Drink } from "../../types";

export default function FavoritesDrinks(): JSX.Element {
  const { favorites, removeFromFavorites } = useContext(FavoriteDrinksContext);

  const handleRemove = (drink: Drink): void => {
    removeFromFavorites(drink);
  };

  return (
    <div>
      <h2>Favorites List</h2>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((drink: Drink) => (
            <li key={drink.idDrink}>
              {drink.strDrink}{" "}
              <button
                onClick={() => {
                  handleRemove(drink);
                }}
              >
                remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in the favorites list.</p>
      )}
    </div>
  );
}
