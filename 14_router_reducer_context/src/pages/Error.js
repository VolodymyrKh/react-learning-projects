import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>sorry, page not found</h1>
        <Link to='/' className='btn btn-primary'>back to main page</Link>
      </div>
    </section>
  );
};

export default Error;
