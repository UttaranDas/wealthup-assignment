// Carousel.jsx
import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center">
        <img src="girl1.png" alt="user image" className="w-24 h-24 sm:w-32 sm:h-32 object-contain mr-4" />
        <div className="w-45 sm:w-96 h-40 sm:h-48">
          <h1 className="text-white font-medium text-lg sm:text-xl leading-6 sm:leading-8">Simrin Sirur</h1>
          <h4 className="text-white font-normal text-base leading-5">Journalist</h4>
          <h4 className="text-white font-normal text-base leading-5">The Print, Gurugram</h4>
          <p className="text-white font-normal text-base mt-2 sm:mt-4">
            "I was afraid to learn about investments and savings because it
            seemed to fly over my head, but Ankit was extremely patient and
            walked me through everything... I now feel more confident to handle
            my own money."
          </p>
        </div>
      </div>
      <img src="next-icon.svg" alt="next icon" className="h-5 w-5 ml-4"/>
    </>
  );
};

export default Carousel;
