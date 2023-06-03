import { KeyboardEvent, useRef } from "react";
import Button from "../UIKit/Button";
import searchIcon from "../../assets/icons/search.svg";
import classes from "./style.module.scss";

type SearchBarType = {
  handleSearch: (searchValue: HTMLInputElement | null) => void;
};

export default function SearchBar({
  handleSearch
}: SearchBarType): JSX.Element {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSearch(searchRef.current);
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
        icon={
          <img
            src={searchIcon}
            alt="favorites"
            onClick={() => handleSearch(searchRef.current)}
          />
        }
      />
    </div>
  );
}
