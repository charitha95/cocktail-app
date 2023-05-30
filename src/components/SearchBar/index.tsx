import { KeyboardEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
    <>
      <input ref={searchRef} onKeyDown={handleKeyPress} />
      <button onClick={handleSearch}>Submit</button>
    </>
  );
}
