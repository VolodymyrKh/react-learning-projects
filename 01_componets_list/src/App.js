import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import axios from "axios";
import "./App.css";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const responce = await axios(url);
      console.log(responce.data);
      setTours(responce.data);
    } catch (e) {
      // console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = (id) => {
    const updatedTours = tours.filter((item) => item.id !== id);
    setTours(updatedTours);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <main>
        <Loading />
      </main>
    );

  if (error)
    return (
      <main>
        <h1 className="title">server error</h1>
        <span>{error.message}</span>
      </main>
    );
  return (
    <main>
      {tours.length > 0 ? (
        <Tours tours={tours} removeItem={removeItem} />
      ) : (
        <div className="title">
          <h1>no tours left</h1>
          <button className="btn" onClick={fetchData}>
            refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
