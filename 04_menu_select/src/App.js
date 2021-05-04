import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import data from "./data";
import "./App.css";

const allCategories = ['all', ...new Set(data.map((item) => item.category))]
console.log("App categories", allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(data);
      return;
    }
    const filteredItems = data.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>today's menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories}/>
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
