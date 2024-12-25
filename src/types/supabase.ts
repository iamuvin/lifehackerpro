export interface Database {
  public: {
    Tables: {
      life_hacks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string;
          category: string;
          tags: string[];
          likes_count: number;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Tables['life_hacks']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Tables['life_hacks']['Insert']>;
      };
      tasks: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          priority: string;
          status: string;
          due_date: string | null;
          reminder_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Tables['tasks']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Tables['tasks']['Insert']>;
      };
      expenses: {
        Row: {
          id: string;
          user_id: string;
          amount: number;
          category: string;
          description: string | null;
          date: string;
          created_at: string;
        };
        Insert: Omit<Tables['expenses']['Row'], 'id' | 'created_at'>;
        Update: Partial<Tables['expenses']['Insert']>;
      };
      recipes: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          description: string | null;
          ingredients: any;
          instructions: any;
          prep_time: number | null;
          cook_time: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Tables['recipes']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Tables['recipes']['Insert']>;
      };
      emergency_solutions: {
        Row: {
          id: string;
          title: string;
          description: string;
          category: string;
          steps: any;
          created_at: string;
          updated_at: string;
        };
        Insert: Omit<Tables['emergency_solutions']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Tables['emergency_solutions']['Insert']>;
      };
    };
  };
}