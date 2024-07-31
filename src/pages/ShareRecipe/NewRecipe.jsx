import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'; // For HTTP requests
import './SubmitRecipe.css';

const NewRecipe = () => {
    const [recipe, setRecipe] = useState({
        RecipeName: '',
        Ingredients: [],
        Author: '',
        Category: '',
        Instructions: '',
    });
    const [ingredient, setIngredient] = useState('');
    const [image, setImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append('RecipeName', recipe.RecipeName);
        formData.append('Ingredients', JSON.stringify(recipe.Ingredients));
        formData.append('Author', recipe.Author);
        formData.append('Category', recipe.Category);
        formData.append('Instructions', recipe.Instructions);
        if (image) {
            formData.append('Image', image);
        }

        try {
            const response = await axios.post('http://localhost:5174/api/recipes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Recipe submitted successfully!');
                setRecipe({
                    RecipeName: '',
                    Ingredients: [],
                    Author: '',
                    Category: '',
                    Instructions: '',
                });
                setImage(null);
            }
        } catch (error) {
            console.error('Error submitting recipe:', error);
            alert('Failed to submit recipe. Please try again.');
        }
    };

    return (
        <div className="containersubmit mx-auto mt-10 p-10 px-40 bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-5">Submit New Recipe!</h1>
            <form onSubmit={handleSubmit}>
                {/* Form fields */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="recipeName">
                        Recipe Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="recipeName" 
                        name="RecipeName"
                        type="text" 
                        value={recipe.RecipeName}
                        onChange={handleInputChange}
                        placeholder="Enter Recipe Name" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ingredients">
                        Ingredients
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="ingredients" 
                        type="text" 
                        value={ingredient}
                        onChange={handleIngredientChange}
                        placeholder="Enter Ingredient" 
                    />
                    <button
                        type="button"
                        onClick={handleAddIngredient}
                        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                    >
                        Add Ingredient
                    </button>
                    <ul className="list-disc pl-5 mt-2">
                        {recipe.Ingredients.map((ing, index) => (
                            <li key={index} className="text-gray-700">{ing}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="author" 
                        name="Author"
                        type="text" 
                        value={recipe.Author}
                        onChange={handleInputChange}
                        placeholder="Enter Author Name" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                        Category
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="category" 
                        name="Category"
                        type="text" 
                        value={recipe.Category}
                        onChange={handleInputChange}
                        placeholder="Enter Category" 
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructions">
                        Instructions
                    </label>
                    <textarea 
                        className="shadow appearance-none border rounded w-full py-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="instructions" 
                        name="Instructions"
                        value={recipe.Instructions}
                        onChange={handleInputChange}
                        placeholder="Enter Instructions" 
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Recipe Image
                    </label>
                    <div {...getRootProps()} className="border-dashed border-2 hover:border-black bg-gray-200 hover:bg-gray-400 border-gray-500 cursor-pointer rounded p-6 text-center">
                        <input {...getInputProps()} />
                        {
                            isDragActive ?
                                <p>Drop the files here...</p> :
                                <p>Drag 'n' drop some files here, or click to select files</p>
                        }
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        type="submit"
                    >
                        Submit Recipe
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewRecipe;
