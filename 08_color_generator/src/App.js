import React, { useState, useEffect } from "react";
import SingleColor from "./components/SingleColor";
import Values from "values.js";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f2b5c7').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      // console.log(colors);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>let's generate color</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#ccc"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </section>

      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
