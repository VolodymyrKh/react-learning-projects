import React from "react";
import { useGlobalContext } from "../context";
import phoneImg from "../images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            maxime cum minima tempore possimus, exercitationem ratione itaque,
            officiis est fugit porro voluptates molestias ad eaque.
          </p>
          <button className='btn'>start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
