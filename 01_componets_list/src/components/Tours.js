import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <ul>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeItem={removeItem} />;
        })}
      </ul>
    </section>
  );
};

export default Tours;
