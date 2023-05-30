import useFetchData from "../../hooks/useFetchData";

export default function RandomDrinks(): JSX.Element {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const count = 5;

  const { data, isLoading, error, fetchData } = useFetchData(url, count);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // formating data (0 = drinks array)
  const drinks = data.map((i) => i[0]);

  const handleFetchMoreDrinks = (): void => {
    fetchData();
  };

  return (
    <div>
      <h1>Random Items</h1>
      <ul>
        {drinks &&
          drinks.map((item) => <li key={item.idDrink}>{item.strDrink}</li>)}
      </ul>
      <button onClick={handleFetchMoreDrinks}>Fetch More Items</button>
    </div>
  );
}
