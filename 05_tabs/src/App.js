import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import "./App.css";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [experience, setExperience] = useState([]);
  const [value, setValue] = useState(0);

  const fetchExperience = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setExperience(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExperience(url);
  }, []);

  if (loading) {
    return (
      <section className="loading section">
        <h1>data loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = experience[value];

  return (
    <section className="section">
      <div className="title">
        <h2>experiense</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">

        {/* buttons container */}
        <div className="btn-container">
          {experience.map((item, index) => {
            return <button key={item.id} onClick={() => setValue(index)} 
            className={`job-btn ${index === value && 'active-btn'}`} >{item.company}</button>;
          })}
        </div>

        {/* experience description container */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
