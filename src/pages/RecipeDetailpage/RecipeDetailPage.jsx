import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../../data/recipes.json';

const RecipeDetail = () => {
  const { name } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const localStorageRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    const combinedRecipes = [...recipesData.recipes, ...localStorageRecipes];
    const foundRecipe = combinedRecipes.find((r) => r.RecipeName === name);
    
    setRecipe(foundRecipe);
  }, [name]);

  if (!recipe) {
    return <div className="text-center p-6">Recipe not found.</div>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.Image}
          alt={recipe.RecipeName}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-4xl font-bold mb-4">{recipe.RecipeName}</h1>
          <p className="text-gray-600 mb-2"><strong>Author:</strong> {recipe.Author}</p>
          <p className="text-gray-600 mb-4"><strong>Category:</strong> {recipe.Category}</p>
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-4">
            {recipe.Ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-800">{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <p className="text-gray-800">{recipe.Instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
