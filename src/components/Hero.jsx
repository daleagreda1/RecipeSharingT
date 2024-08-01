import React from 'react';
import food from "../assets/pics/food.jpg";
import './components.css';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-4">
      <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-16">
        <div className="md:py-28 flex flex-col gap-8 md:gap-10 md:w-2/3">
          <p className="font-bold text-2xl md:text-6xl lg:text-7xl drop-shadow-2xl">
            <a className="text-green-700">Welcome to CookShares!</a> Where every recipe is unique.
          </p>
          <div className="pt-1">
            <h2 className="font-bold text-lg md:text-3xl lg:text-4xl text-green-900">
              Discover and share amazing recipes.
            </h2>
            <h3 className="w-full md:w-[44rem] font-semibold pt-4 text-gray-500 text-md">
            We believe the kitchen is the heart of any home, and we're here to make your cooking experience delightful. 
            Whether you're a seasoned chef or just starting out, our platform is designed to inspire, connect, and share the joy of cooking with a global community.
            </h3>
          </div>
          <div className="flex justify-center md:justify-start pt-4">
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
