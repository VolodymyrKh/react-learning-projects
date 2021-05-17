import React, { useState, useContext, useEffect, useCallback } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktails = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${url}${searchValue}`);
      const data = await res.json();
      const { drinks } = data;
    //   console.log('drinks',drinks);
      if (drinks) {
        const modifiedDrinks = drinks.map((drink) => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass,
            } = drink;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          }
        );
        setCocktails(modifiedDrinks)
      } else {
        setCocktails([]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    fetchCocktails();
  }, [searchValue, fetchCocktails]);
  return (
    <AppContext.Provider
      value={{
        loading,
        cocktails,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
