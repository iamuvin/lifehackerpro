/*
  # Core Features Schema Setup

  1. New Tables
    - `life_hacks`
      - Stores personalized life hacks and tips
      - Categories include: productivity, cooking, travel, fitness, finance
    - `tasks`
      - Manages user tasks and chores
      - Includes priority, status, and reminders
    - `expenses`
      - Tracks user expenses and budget information
    - `recipes`
      - Stores recipe information and ingredients
    - `emergency_solutions`
      - Quick solutions for common problems
  
  2. Security
    - Enable RLS on all tables
    - Policies ensure users can only access their own data
*/

-- Life Hacks Table
CREATE TABLE IF NOT EXISTS life_hacks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE life_hacks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all life hacks" 
  ON life_hacks FOR SELECT USING (true);

CREATE POLICY "Users can create their own life hacks" 
  ON life_hacks FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own life hacks" 
  ON life_hacks FOR UPDATE USING (auth.uid() = user_id);

-- Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  priority text DEFAULT 'medium',
  status text DEFAULT 'pending',
  due_date timestamptz,
  reminder_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own tasks"
  ON tasks USING (auth.uid() = user_id);

-- Expenses Table
CREATE TABLE IF NOT EXISTS expenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  amount decimal NOT NULL,
  category text NOT NULL,
  description text,
  date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own expenses"
  ON expenses USING (auth.uid() = user_id);

-- Recipes Table
CREATE TABLE IF NOT EXISTS recipes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text,
  ingredients jsonb NOT NULL,
  instructions jsonb NOT NULL,
  prep_time integer,
  cook_time integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all recipes" 
  ON recipes FOR SELECT USING (true);

CREATE POLICY "Users can manage their own recipes"
  ON recipes FOR ALL USING (auth.uid() = user_id);

-- Emergency Solutions Table
CREATE TABLE IF NOT EXISTS emergency_solutions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  steps jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE emergency_solutions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Everyone can read emergency solutions" 
  ON emergency_solutions FOR SELECT USING (true);