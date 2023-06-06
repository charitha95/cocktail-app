import { useNavigate } from "react-router-dom";
import RandomDrinks from "../../components/RandomDrinks";
import RandomDrinksAction from "../../components/RandomDrinksAction";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/UIKit/Title";
import { BASE_URL, RANDOM_COUNT } from "../../constants";
import useFetchData from "../../hooks/useFetchData";
import styles from "./style.module.scss";

export default function Home(): JSX.Element {
  const url = `${BASE_URL}/random.php`;
  const result = useFetchData(url, RANDOM_COUNT);
  const navigate = useNavigate();

  const handleSearch = (searchValue: HTMLInputElement | null): void => {
    if (searchValue) {
      const value = searchValue.value;
      if (!value) {
        alert("search value cannot be empty!");
        return;
      }
      navigate(`/result/${value}`);
    }
  };
  return (
    <main className={`${styles.home} grid`}>
      <section className={`${styles.left} col-7`}>
        <div className={styles["content-wrapper"]}>
          <SearchBar handleSearch={handleSearch} />
          <Title title="Raise a Glass" />
          <RandomDrinks {...result} />
        </div>
      </section>
      <section className={`${styles.right} col-5`}>
        <div className={styles["content-wrapper"]}>
          <RandomDrinksAction fetchData={result.fetchData} />
        </div>
      </section>
    </main>
  );
}
