import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {items.drinks &&
          items.drinks.map((item: any) => (
            <li key={item.idDrink}>{item.strDrink}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;
