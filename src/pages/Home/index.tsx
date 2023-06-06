import { useNavigate } from "react-router-dom";
import RandomDrinks from "../../components/RandomDrinks";
import RandomDrinksAction from "../../components/RandomDrinksAction";
import SearchBar from "../../components/SearchBar";
import Title from "../../components/UIKit/Title";
import { BASE_URL, RANDOM_COUNT } from "../../constants";
import useFetchData from "../../hooks/useFetchData";
import styles from "./style.module.scss";
import Button from "../../components/UIKit/Button";
import shuffleIcon from "../../assets/icons/shuffle.svg";

export default function Home(): JSX.Element {
  const url = `${BASE_URL}/random.php`;
  const result = useFetchData(url, RANDOM_COUNT);
  const navigate = useNavigate();

  const handleSearch = (searchValue: string): void => {
    if (!searchValue) {
      alert("search value cannot be empty!");
      return;
    }
    navigate(`/result/${searchValue}`);
  };
  return (
    <main className={`${styles.home} grid`}>
      <section className={`${styles.left} col-12 col-md-7 `}>
        <div className={styles["content-wrapper"]}>
          <SearchBar handleSearch={handleSearch} />
          <Title title="Raise a Glass" />
          <Button
            variant="primary"
            name="The Cocktail Shuffle"
            onClick={() => result.fetchData()}
            classes={styles["shuffle-btn"]}
            icon={<img src={shuffleIcon} alt="shuffle" />}
          />
          <RandomDrinks {...result} />
        </div>
      </section>
      <section className={`${styles.right} col-12 col-md-5 `}>
        <div className={styles["content-wrapper"]}>
          <RandomDrinksAction fetchData={result.fetchData} />
        </div>
      </section>
    </main>
  );
}
