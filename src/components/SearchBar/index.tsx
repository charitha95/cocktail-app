import { KeyboardEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UIKit/Button";
import searchIcon from "../../assets/icons/search.svg";
import classes from "./style.module.scss";

export default function SearchBar(): JSX.Element {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleSearch = (): void => {
    if (searchRef.current) {
      const value = searchRef.current.value;
      if (!value) return;
      navigate(`/result/${value}`);
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={classes["search-bar"]}>
      <input
        ref={searchRef}
        onKeyDown={handleKeyPress}
        placeholder="Search here"
      />
      <Button
        variant="primary"
        icon={<img src={searchIcon} alt="favorites" onClick={handleSearch} />}
      />
    </div>
  );
}
