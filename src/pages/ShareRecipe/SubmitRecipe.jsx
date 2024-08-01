import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './SubmitRecipe.css';

const SubmitRecipe = () => {
    const [recipe, setRecipe] = useState({
        RecipeName: '',
        Ingredients: [],
        Author: '',
        Category: '',
        Instructions: '',
    });
    const [ingredient, setIngredient] = useState('');
    const [image, setImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setImage(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleIngredientChange = (e) => {
        setIngredient(e.target.value);
    };

    const handleAddIngredient = () => {
        if (ingredient.trim() !== '') {
            setRecipe((prevRecipe) => ({
                ...prevRecipe,
                Ingredients: [...prevRecipe.Ingredients, ingredient],
            }));
            setIngredient('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecipe = {
            id: Math.floor(Math.random() * 10000),
            RecipeName: recipe.RecipeName,
            Ingredients: recipe.Ingredients,
            Author: recipe.Author,
            Category: recipe.Category,
            Instructions: recipe.Instructions,
            Image: image ? URL.createObjectURL(image) : '',
        };

        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(newRecipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));

        setRecipe({
            RecipeName: '',
            Ingredients: [],
            Author: '',
            Category: '',
            Instructions: '',
        });
        setImage(null);

        alert('Recipe submitted successfully!');
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 mb-20 p-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold mb-6 text-center text-green-700">Submit New Recipe!</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="recipeName" className="block text-gray-700 text-sm font-bold mb-2">Recipe Name</label>
                    <input
                        id="recipeName"
                        name="RecipeName"
                        type="text"
                        value={recipe.RecipeName}
                        onChange={handleInputChange}
                        placeholder="Enter Recipe Name"
                        required
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="ingredients" className="block text-gray-700 text-sm font-bold mb-2">Ingredients</label>
                    <div className="flex">
                        <input
                            id="ingredients"
                            type="text"
                            value={ingredient}
                            onChange={handleIngredientChange}
                            placeholder="Enter Ingredient"
                            className="w-full border rounded-l py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="button"
                            onClick={handleAddIngredient}
                            className="bg-green-500 text-white px-4 py-2 rounded-r focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Add
                        </button>
                    </div>
                    <ul className="list-disc pl-5 mt-2 text-gray-700">
                        {recipe.Ingredients.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">Author</label>
                    <input
                        id="author"
                        name="Author"
                        type="text"
                        value={recipe.Author}
                        onChange={handleInputChange}
                        placeholder="Enter Author Name"
                        required
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                    <input
                        id="category"
                        name="Category"
                        type="text"
                        value={recipe.Category}
                        onChange={handleInputChange}
                        placeholder="Enter Category"
                        required
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="instructions" className="block text-gray-700 text-sm font-bold mb-2">Instructions</label>
                    <textarea
                        id="instructions"
                        name="Instructions"
                        value={recipe.Instructions}
                        onChange={handleInputChange}
                        placeholder="Enter Instructions"
                        required
                        className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Recipe Image</label>
                    <div {...getRootProps()} className="border-dashed border-2 bg-gray-200 hover:bg-gray-300 border-gray-500 cursor-pointer rounded p-6 text-center">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here...</p> :
                                <p>Drag 'n' drop an image here, or click to select an image</p>
                        }
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SubmitRecipe;
