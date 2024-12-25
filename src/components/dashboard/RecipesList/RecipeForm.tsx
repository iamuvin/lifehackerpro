import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Recipe } from '../../../types/recipe';

interface RecipeFormProps {
  onSubmit: (recipe: Omit<Recipe, 'id' | 'created_at' | 'updated_at'>) => void;
}

export default function RecipeForm({ onSubmit }: RecipeFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [ingredients, setIngredients] = useState([{ item: '', amount: '', unit: '' }]);
  const [instructions, setInstructions] = useState(['']);

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { item: '', amount: '', unit: '' }]);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleIngredientChange = (index: number, field: string, value: string) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = { ...newIngredients[index], [field]: value };
    setIngredients(newIngredients);
  };

  const handleAddInstruction = () => {
    setInstructions([...instructions, '']);
  };

  const handleRemoveInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const handleInstructionChange = (index: number, value: string) => {
    const newInstructions = [...instructions];
    newInstructions[index] = value;
    setInstructions(newInstructions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      ingredients,
      instructions,
      prep_time: prepTime ? parseInt(prepTime) : null,
      cook_time: cookTime ? parseInt(cookTime) : null,
      user_id: '' // Will be set by the API
    });
    setTitle('');
    setDescription('');
    setPrepTime('');
    setCookTime('');
    setIngredients([{ item: '', amount: '', unit: '' }]);
    setInstructions(['']);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Recipe title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={2}
        />

        <div className="flex space-x-4">
          <input
            type="number"
            placeholder="Prep time (minutes)"
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="number"
            placeholder="Cook time (minutes)"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                placeholder="Amount"
                value={ingredient.amount}
                onChange={(e) => handleIngredientChange(index, 'amount', e.target.value)}
                className="w-1/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Unit"
                value={ingredient.unit}
                onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
                className="w-1/4 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Ingredient"
                value={ingredient.item}
                onChange={(e) => handleIngredientChange(index, 'item', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveIngredient(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Minus className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddIngredient}
            className="text-indigo-600 hover:text-indigo-700 text-sm flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Ingredient
          </button>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Instructions</h3>
          {instructions.map((instruction, index) => (
            <div key={index} className="flex space-x-2">
              <span className="py-2 text-gray-500">{index + 1}.</span>
              <input
                type="text"
                placeholder="Instruction step"
                value={instruction}
                onChange={(e) => handleInstructionChange(index, e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              {instructions.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveInstruction(index)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <Minus className="h-5 w-5" />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddInstruction}
            className="text-indigo-600 hover:text-indigo-700 text-sm flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Step
          </button>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Recipe
        </button>
      </div>
    </form>
  );
}