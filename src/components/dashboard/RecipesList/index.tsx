import React from 'react';
import { ChefHat } from 'lucide-react';
import { useDashboardStore } from '../../../store/dashboardStore';
import { useAuthStore } from '../../../store/authStore';
import RecipeCard from './RecipeCard';
import RecipeForm from './RecipeForm';
import { api } from '../../../services/api';

export default function RecipesList() {
  const { recipes, fetchDashboardData } = useDashboardStore();
  const { user } = useAuthStore();

  const handleAddRecipe = async (recipe: any) => {
    if (!user?.id) return;
    try {
      await api.recipes.create({
        ...recipe,
        user_id: user.id
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <ChefHat className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Recipes</h2>
      </div>

      <RecipeForm onSubmit={handleAddRecipe} />

      <div className="space-y-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}