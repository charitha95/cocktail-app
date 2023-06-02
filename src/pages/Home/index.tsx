import RandomDrinks from "../../components/RandomDrinks";
import RandomDrinksAction from "../../components/RandomDrinksAction";
import SearchBar from "../../components/SearchBar";
import { BASE_URL, RANDOM_COUNT } from "../../constants";
import useFetchData from "../../hooks/useFetchData";
import classes from "./style.module.scss";

export default function Home(): JSX.Element {
  const url = `${BASE_URL}/random.php`;
  const result = useFetchData(url, RANDOM_COUNT);

  return (
    <main className={`${classes.home} grid`}>
      <section className="col-7">
        <SearchBar />
        <RandomDrinks {...result} />
      </section>
      <section className={`${classes.aside} col-5`}>
        <RandomDrinksAction fetchData={result.fetchData} />
      </section>
    </main>
  );
}
