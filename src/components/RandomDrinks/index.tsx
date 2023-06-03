import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";
import { fetchDataType } from "../../types";
import DrinkCard from "../DrinkCard";
import classes from "./style.module.scss";

export default function RandomDrinks({
  data,
  isLoading,
  error,
  fetchData
}: fetchDataType): JSX.Element {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data.map((i) => i[0]);

  if (hasDuplicateDrinks(drinks)) {
    fetchData();
  }

  return (
    <div>
      <ul className="grid">
        {drinks &&
          drinks.map((item) => (
            <DrinkCard
              key={item.idDrink}
              drink={item}
              cssClasses={`${classes["random-drinks"]} col-12 col-md-4`}
            />
          ))}
      </ul>
    </div>
  );
}
