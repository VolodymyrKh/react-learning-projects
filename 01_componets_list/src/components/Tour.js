import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeItem }) => {
  const [readMore, setReadMore] = useState(false);
  
  const roundStr = str => {
      return Math.trunc((Number.parseFloat(str.split(',').join('.'))*100))/100
  }

  console.log(roundStr(price));
  
  return (
    <li>
      <article className="single-tour">
        <img src={image} alt="tour img" />
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${roundStr(price)}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 175)}...`}
          <button onClick={() => setReadMore((readMore) => !readMore)}>
            {readMore ? "hide text" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeItem(id)}>not interesting</button>
      </article>
    </li>
  );
};
export default Tour;
