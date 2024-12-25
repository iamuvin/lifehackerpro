import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Tables = Database['public']['Tables'];

export const api = {
  // Life Hacks
  lifeHacks: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('life_hacks')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    create: async (hack: Tables['life_hacks']['Insert']) => {
      const { data, error } = await supabase
        .from('life_hacks')
        .insert(hack)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    update: async (id: string, hack: Tables['life_hacks']['Update']) => {
      const { data, error } = await supabase
        .from('life_hacks')
        .update(hack)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  },

  // Tasks
  tasks: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .order('due_date', { ascending: true });
      if (error) throw error;
      return data;
    },
    create: async (task: Tables['tasks']['Insert']) => {
      const { data, error } = await supabase
        .from('tasks')
        .insert(task)
        .select()
        .single();
      if (error) throw error;
      return data;
    },
    update: async (id: string, task: Tables['tasks']['Update']) => {
      const { data, error } = await supabase
        .from('tasks')
        .update(task)
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  },

  // Expenses
  expenses: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('expenses')
        .select('*')
        .order('date', { ascending: false });
      if (error) throw error;
      return data;
    },
    create: async (expense: Tables['expenses']['Insert']) => {
      const { data, error } = await supabase
        .from('expenses')
        .insert(expense)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  },

  // Recipes
  recipes: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('recipes')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
    create: async (recipe: Tables['recipes']['Insert']) => {
      const { data, error } = await supabase
        .from('recipes')
        .insert(recipe)
        .select()
        .single();
      if (error) throw error;
      return data;
    }
  },

  // Emergency Solutions
  emergencySolutions: {
    getAll: async () => {
      const { data, error } = await supabase
        .from('emergency_solutions')
        .select('*')
        .order('category');
      if (error) throw error;
      return data;
    }
  }
};