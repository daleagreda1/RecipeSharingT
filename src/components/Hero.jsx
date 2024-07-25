import React from 'react';
import './components.css';

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap md:flex-nowrap">
        <div className="py-12 px-8 md:py-40 md:px-40 flex flex-col gap-8 md:gap-20 w-full md:w-2/3">
          <p className="font-bold text-3xl md:text-7xl">
            Welcome to CookShares! Where every recipe is unique.
          </p>
          <h2 className="font-bold text-xl md:text-2xl">
            Discover and share amazing recipes.
          </h2>
          <div>
            <button className="btnsee rounded-full w-28 h-12">
              See Recipe
            </button>
          </div>
        </div>
        <div className="heroright flex flex-col justify-center items-center text-center w-full md:w-1/3 px-4 md:px-8">
         <img></img> Highers
        </div>
      </div>  
    </div>
  );
};

export default Hero;
