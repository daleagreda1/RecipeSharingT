import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import recipesData from '../../data/recipes.json';

const RecipeList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const localStorageRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const combinedRecipes = [...recipesData.recipes, ...localStorageRecipes];
    setRecipes(combinedRecipes);
  }, []);

  const handleChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.Category === selectedCategory;
    const matchesSearchTerm = recipe.RecipeName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const uniqueCategories = ['All', ...new Set(recipes.map(recipe => recipe.Category))];
  
  console.log(filteredRecipes);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe List</h1>

      <div className="flex flex-col md:flex-row md:gap-x-4 items-center mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0">
          <label htmlFor="category" className="block text-lg font-medium mb-2 md:mb-0">Filter by Category:</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-lg p-2 text-lg pl-1"
          >
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <input 
          type="text" 
          placeholder="Search for a recipe..." 
          value={searchTerm}
          onChange={handleChange}
          className="p-2 border rounded h-11 w-full md:w-auto"
        />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.RecipeName}
            className="bg-gray-100 w-full sm:w-72 md:w-80 lg:w-96 xl:w-1/4 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            <Link to={`/recipe/${recipe.RecipeName}`} className="block">
              <img
                src={recipe.Image}
                alt={recipe.RecipeName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{recipe.RecipeName}</h2>
                <p className="text-gray-600">{recipe.Category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
