import React, { useState } from "react";
import users from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(randomIndex(users));
  const { name, job, image, text } = users[index];

  function randomIndex(users) {
    return Math.floor(Math.random() * users.length);
  }

  const prevPerson = () => {
    index === 0 ? setIndex(users.length - 1) : setIndex((index) => index - 1);
  };

  const nextPerson = () => {
    index === users.length - 1 ? setIndex(0) : setIndex((index) => index + 1);
  };

  const randomPerson = () => {
    const randomInd = randomIndex(users);
    randomInd === index ? setIndex(index + 1) : setIndex(randomInd);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        random person
      </button>
    </article>
  );
};

export default Review;
