import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import CocktailPage from "./pages/CocktailPage";
import Error from "./pages/Error";

//components
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cocktail/:id">
          <CocktailPage />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
