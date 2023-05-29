import useFetchData from "./hooks/useFetchData";

function App(): JSX.Element {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
  const count = 5;

  const { data, isLoading, error, fetchData } = useFetchData(url, count);

  const handleFetchMoreDrinks = (): void => {
    fetchData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Random Items</h1>
      <ul>
        {data.map((item) => (
          <li key={item.idDrink}>{item.strDrink}</li>
        ))}
      </ul>
      <button onClick={handleFetchMoreDrinks}>Fetch More Items</button>
    </div>
  );
}

export default App;
