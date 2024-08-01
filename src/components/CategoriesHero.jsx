import React from 'react';
import maindish from '../assets/pics/maindish.jpg';
import breakfast from '../assets/pics/breakfast.jpeg';
import dessert from '../assets/pics/dessert.jpg';
import andmore from '../assets/pics/andmore.jpg';

const CategoriesHero = () => {
  const categories = [
    {
      name: 'Main Dish',
      image: maindish,
      description: 'Hearty and fulfilling main courses to satisfy any appetite.'
    },
    {
      name: 'Breakfast',
      image: breakfast,
      description: 'Start your day right with these delicious breakfast ideas.'
    },
    {
      name: 'Dessert',
      image: dessert,
      description: 'Sweet treats and delightful desserts for every occasion.'
    },
    {
      name: 'And More',
      image: andmore,
      description: 'Explore all our recipes to find your next favorite dish.'
    },
  ];

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-green-700 mb-10">Discover Our Recipes!</h1>
          <p className="text-lg text-gray-600">Explore recipes by categories and find your favorite dishes!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-60 object-cover rounded-lg shadow-lg" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex flex-col items-center justify-center p-4">
                <h2 className="text-white text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-white text-sm text-center">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-20 text-lg font-semibold text-green-950">
          Explore our wide range of recipes. Whether you're looking for a hearty main dish, a delicious breakfast, a sweet dessert, or just want to browse all our recipes, we've got you covered!
        </p>
      </div>
    </div>
  );
};

export default CategoriesHero;
