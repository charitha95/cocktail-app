import { useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import { Drink } from "../../types";

export default function SearchResults(): JSX.Element {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const { search } = useParams();
  const { data, isLoading, error } = useFetchData(`${url}${search}`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data[0];

  const handleAdd = (drink: Drink): void => {
    console.log(drink);
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
    </div>
  );
}
