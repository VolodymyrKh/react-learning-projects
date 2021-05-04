import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info }) => {
    const [toggleInfo, setToggleInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setToggleInfo(!toggleInfo)}>
          {toggleInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{toggleInfo && info}</p>
    </article>
  );
};

export default Question;
