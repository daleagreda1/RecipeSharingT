import React from 'react';
import food from "../assets/pics/food.jpg";
import './components.css';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-10">
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16">
        <div className="py-16 md:py-40 flex flex-col gap-8 md:gap-20 w-full md:w-2/3">
          <p className="font-bold text-3xl md:text-6xl lg:text-7xl">
            Welcome to CookShares! Where every recipe is unique.
          </p>
          <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">
            Discover and share amazing recipes.
          </h2>
          <div>
            <a href="/RecipeListpage" target='_blank'>
              <button className="btnsee rounded-full font-semibold w-32 h-12 text-sm text-white shadow-md hover:bg-white hover:text-green-500 transition-colors duration-200">
                See Recipes
              </button>
            </a>
          </div>
        </div>
        <div className="heroright w-250px h-full flex flex-col justify-center rounded-xl items-center text-center md:h-[40rem] md:w-[60rem] md:px-8 mt-[80px]">
          <img src={food} alt="foodhero" className="foodhero object-cover rounded-xl justify-center" />
        </div>
      </div>  
    </div>
  );
};

export default Hero;
