// Hero.jsx
import React from "react";
import Carousel from "./Carousel";
import Todo from "./Todo";

const Hero = () => {
  return (
    <>
      <div
        className="flex flex-col justify-center items-center px-10 sm:px-20 md:px-20 lg:px-20 py-10 sm:py-16 lg:py-20"
        style={{
          background: "linear-gradient(175deg, #159C98 0%, #138F9E 100%)",
        }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl leading-normal text-white font-Poppins font-semibold">
          Backed by the best
        </h1>
        <h3 className="text-xl sm:text-2xl font-light text-white font-Poppins mb-4 sm:mb-6">
          Wealthup is backed and supported by
        </h3>
        <img src="13.png" alt="banner" />
      </div>

      <div className="flex flex-col justify-center items-center bg-[#0A5783] px-10 sm:px-20 md:px-20 lg:px-20 py-10 sm:py-16 lg:py-20 gap-4 sm:gap-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-extrabold font-Poppins">
          Transforming Lives - Financially!
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Carousel />
          <img
            src="11.png"
            alt="testimonials"
            className="h-60 sm:h-96 w-auto ml-4"
          />
        </div>
      </div>

      <div
        className="px-10 sm:px-20 md:px-20"
        style={{
          background: "linear-gradient(180deg, #1FB3A5 0%, #18A1A7 100%)",
        }}
      >
        <img
          src="Scroller with logos.png"
          alt="trusted companies"
          className="mx-auto"
        />
      </div>

      <div className="flex justify-center px-80 py-10 bg-[#0A5783]" >
        <Todo />
      </div>
    </>
  );
};

export default Hero;
