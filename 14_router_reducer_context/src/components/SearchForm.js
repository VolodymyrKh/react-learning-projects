import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();
  const searchValue = useRef("");

  const searchCocktail = () => {
    setSearchValue(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  setSearchValue(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="section search" onSubmit={handleSubmit}>
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search for a cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
