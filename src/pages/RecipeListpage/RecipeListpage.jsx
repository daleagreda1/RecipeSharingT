import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import recipes from '../../data/recipes.json';
import Footer from '../../components/Footer';

const RecipeList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
      setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredRecipes = Array.isArray(recipes?.recipes) && recipes.recipes.filter(recipe => {
    const matchesCategory = selectedCategory === 'All' || recipe.Category === selectedCategory;
    const matchesSearchTerm = recipe.RecipeName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  const uniqueCategories = ['All', ...new Set(recipes.recipes.map(recipe => recipe.Category))];
  
  console.log(filteredRecipes);

  return (
    <div className="p-4 py-14 px-20">
    <h1 className="text-3xl font-bold mb-8">Recipe List</h1>
      <div className="flex flex-row gap-x-20">
        <div className="mb-6 flex gap-4 items-center">
          <label htmlFor="category" className="block text-lg font-medium mb-2">Filter by Category:</label>
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
          className="p-2 border rounded h-11"
        />
      </div>
      <div className="flex flex-wrap gap-10 justify-center align-middle mt-10">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.RecipeName}
            className="bg-gray-100 w-80 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
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
