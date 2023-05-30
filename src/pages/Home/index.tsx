import RandomDrinks from "../../components/RandomDrinks";
import SearchBar from "../../components/SearchBar";

export default function Home(): JSX.Element {
  return (
    <div>
      <SearchBar />
      <RandomDrinks />
    </div>
  );
}
