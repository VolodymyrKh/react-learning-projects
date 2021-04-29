import React, { useState } from "react";
import users from "../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(randomIndex(users));
  const { name, job, image, text } = users[index];

  function randomIndex(users) {
    return Math.floor(Math.random() * users.length);
  }

  const checkIndex = (index) => {
    if (index > users.length - 1) return 0;
    if (index < 0) return users.length - 1;
    return index;
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      return checkIndex(prevIndex - 1);
    });
  };

  const nextPerson = () => {
    setIndex((prevIndex) => checkIndex(prevIndex + 1));
  };

  const randomPerson = () => {
    let randomInd = randomIndex(users);
    randomInd = randomInd === index ? index + 1 : randomInd;
    setIndex(checkIndex(randomInd));
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
