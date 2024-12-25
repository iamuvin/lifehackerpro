import { create } from 'zustand';
import { api } from '../services/api';
import type { Database } from '../types/supabase';

type Tables = Database['public']['Tables'];

interface DashboardState {
  lifeHacks: Tables['life_hacks']['Row'][];
  tasks: Tables['tasks']['Row'][];
  expenses: Tables['expenses']['Row'][];
  recipes: Tables['recipes']['Row'][];
  emergencySolutions: Tables['emergency_solutions']['Row'][];
  loading: boolean;
  error: string | null;
  fetchDashboardData: () => Promise<void>;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  lifeHacks: [],
  tasks: [],
  expenses: [],
  recipes: [],
  emergencySolutions: [],
  loading: false,
  error: null,
  fetchDashboardData: async () => {
    set({ loading: true, error: null });
    try {
      const [lifeHacks, tasks, expenses, recipes, emergencySolutions] = await Promise.all([
        api.lifeHacks.getAll(),
        api.tasks.getAll(),
        api.expenses.getAll(),
        api.recipes.getAll(),
        api.emergencySolutions.getAll()
      ]);
      
      set({
        lifeHacks,
        tasks,
        expenses,
        recipes,
        emergencySolutions,
        loading: false
      });
    } catch (error: any) {
      console.error('Error fetching dashboard data:', error);
      set({ error: error.message, loading: false });
    }
  }
}));