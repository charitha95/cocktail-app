import { useContext } from "react";
import { FavoriteDrinksContext } from "../../contexts/FavoriteDrinksContext";
import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";
import { fetchDataType } from "../../types";
import DrinkCard from "../DrinkCard";
import DrinkCardSkeleton from "../DrinkCardSkeleton/DrinkCardSkeleton";
import classes from "./style.module.scss";

export default function RandomDrinks({
  data,
  isLoading,
  error,
  fetchData
}: fetchDataType): JSX.Element {
  const { favorites, toggleFavorites } = useContext(FavoriteDrinksContext);

  if (isLoading) {
    return (
      <div className={`${classes["random-drinks"]} grid`}>
        {Array.from({ length: 5 }).map((_, idx) => (
          <DrinkCardSkeleton key={idx} />
        ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data.map((i) => i[0]);

  if (hasDuplicateDrinks(drinks)) {
    fetchData();
    return <></>;
  }

  return (
    <div className={`${classes["random-drinks"]} grid`}>
      {drinks &&
        drinks.map((item) => (
          <DrinkCard
            isFav={
              favorites.filter((fav) => fav.idDrink === item.idDrink).length > 0
            }
            key={item.idDrink}
            drink={item}
            cssClasses={`col-12 col-md-4`}
            toggleFavorite={toggleFavorites}
          />
        ))}
    </div>
  );
}
