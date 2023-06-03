import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import { Drink } from "../../types";
import classes from "./style.module.scss";
import SearchBar from "../../components/SearchBar";
import DrinkCard from "../../components/DrinkCard";

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
    <main className={`${classes.results} grid`}>
      <section className={`col-12`}>
        <div className={classes["search-bar"]}>
          <SearchBar handleSearch={handleSearch} />
        </div>
      </section>
      <section className={`${classes.drinks} col-12 grid`}>
        {favorites.length > 0 ? (
          <>
            {favorites.map((drink: Drink) => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
                cssClasses={`col-2 col-md-2`}
                toggleFavorite={handleRemove}
              />
            ))}
          </>
        ) : (
          <p>No items in the favorites list.</p>
        )}
      </section>
    </main>
  );
}
