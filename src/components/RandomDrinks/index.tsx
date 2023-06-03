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
            key={item.idDrink}
            drink={item}
            cssClasses={`col-12 col-md-4`}
          />
        ))}
    </div>
  );
}
