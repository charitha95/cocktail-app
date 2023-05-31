import { BASE_URL, RANDOM_COUNT } from "../../constants";
import hasDuplicateDrinks from "../../helpers/hasDuplicateDrinks";
import useFetchData from "../../hooks/useFetchData";

export default function RandomDrinks(): JSX.Element {
  const url = `${BASE_URL}/random.php`;

  const { data, isLoading, error, fetchData } = useFetchData(url, RANDOM_COUNT);

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

  const handleFetchMoreDrinks = (): void => {
    fetchData();
  };

  return (
    <div>
      <h1>Random Drinks</h1>
      <ul>
        {drinks &&
          drinks.map((item) => <li key={item.idDrink}>{item.strDrink}</li>)}
      </ul>
      <button onClick={handleFetchMoreDrinks}>Fetch More Items</button>
    </div>
  );
}
