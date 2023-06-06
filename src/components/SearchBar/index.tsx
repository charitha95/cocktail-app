import { KeyboardEvent, useRef } from "react";
import Button from "../UIKit/Button";
import searchIcon from "../../assets/icons/search.svg";
import styles from "./style.module.scss";

type SearchBarProps = {
  handleSearch: (searchValue: string) => void;
};

export default function SearchBar({
  handleSearch
}: SearchBarProps): JSX.Element {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      if (searchRef.current) handleSearch(searchRef.current?.value);
    }
  };

  return (
    <div className={styles["search-bar"]}>
      <input
        ref={searchRef}
        onKeyDown={handleKeyPress}
        placeholder="Search here"
        data-testid="search-input"
      />
      <Button
        variant="primary"
        icon={<img src={searchIcon} alt="search-btn" />}
        onClick={() => handleSearch(searchRef.current?.value || "")}
      />
    </div>
  );
}
