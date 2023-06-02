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
      <section className={`${classes.left} col-7`}>
        <div className={classes["content-wrapper"]}>
          <SearchBar />
          <RandomDrinks {...result} />
        </div>
      </section>
      <section className={`${classes.right} col-5`}>
        <div className={classes["content-wrapper"]}>
          <RandomDrinksAction fetchData={result.fetchData} />
        </div>
      </section>
    </main>
  );
}
