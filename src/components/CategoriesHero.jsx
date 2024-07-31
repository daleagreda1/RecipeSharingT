import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesHero = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="bg-gray-100 py-60">
      <div className="container mx-auto px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-10">Discover Our Recipes</h1>
          <p className="text-lg text-gray-600">Explore recipes by categories and find your favorite dishes!</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <button
            onClick={() => handleCategoryClick('Main Dish')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Main Dish
          </button>
          <button
            onClick={() => handleCategoryClick('Breakfast')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Breakfast
          </button>
          <button
            onClick={() => handleCategoryClick('Dessert')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Dessert
          </button>
          <button
            onClick={() => handleCategoryClick('All')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Browse All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHero;
