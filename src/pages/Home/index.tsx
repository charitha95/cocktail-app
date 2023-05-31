import RandomDrinks from "../../components/RandomDrinks";
import SearchBar from "../../components/SearchBar";
import { useNavigate } from "react-router-dom";

export default function Home(): JSX.Element {
  const navigate = useNavigate();

  const handleFv = (): void => {
    navigate("/favorites");
  };

  return (
    <div>
      <button onClick={handleFv}>go to favs</button>
      <SearchBar />
      <RandomDrinks />
    </div>
  );
}
