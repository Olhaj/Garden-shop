import React from "react";
import "./_Banner.scss";

const Banner = () => {
  return (
    <section className="hero">
      <div className="hero_title">
        <h1 className="hero_text">
          Amazing Discounts <br />
          on Garden Products!
        </h1>
        <button className="hero_btn">Check out</button>
      </div>
    </section>
  );
};

export default Banner;
