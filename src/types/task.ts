export interface Task {
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
}