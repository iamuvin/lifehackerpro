import React from 'react';
import { ListTodo } from 'lucide-react';
import { useDashboardStore } from '../../../store/dashboardStore';
import { useAuthStore } from '../../../store/authStore';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { api } from '../../../services/api';

export default function TasksList() {
  const { tasks, fetchDashboardData } = useDashboardStore();
  const { user } = useAuthStore();

  const handleAddTask = async (task: any) => {
    if (!user?.id) return;
    try {
      await api.tasks.create({
        ...task,
        user_id: user.id
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await api.tasks.update(id, { status });
      fetchDashboardData();
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <ListTodo className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Tasks</h2>
      </div>

      <TaskForm onSubmit={handleAddTask} />

      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
          />
        ))}
      </div>
    </div>
  );
}