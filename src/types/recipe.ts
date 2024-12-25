export interface Recipe {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  ingredients: {
    item: string;
    amount: string;
    unit: string;
  }[];
  instructions: string[];
  prep_time: number | null;
  cook_time: number | null;
  created_at: string;
  updated_at: string;
}