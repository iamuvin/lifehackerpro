import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import type { Recipe } from '../../../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const totalTime = (recipe.prep_time || 0) + (recipe.cook_time || 0);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-medium text-lg">{recipe.title}</h3>
          {recipe.description && (
            <p className="text-gray-600 text-sm mt-1">{recipe.description}</p>
          )}
        </div>
        <ChefHat className="h-5 w-5 text-indigo-600" />
      </div>

      {totalTime > 0 && (
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          {totalTime} minutes
        </div>
      )}

      <div className="space-y-2">
        <div>
          <h4 className="font-medium text-sm mb-1">Ingredients</h4>
          <ul className="text-sm text-gray-600 list-disc list-inside">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index}>
                {ingredient.amount} {ingredient.unit} {ingredient.item}
              </li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li className="text-indigo-600">
                +{recipe.ingredients.length - 3} more...
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}