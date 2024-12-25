import React from 'react';
import { Check, Clock, Flag } from 'lucide-react';
import { Task } from '../../../types/task';

interface TaskItemProps {
  task: Task;
  onStatusChange: (id: string, status: string) => void;
}

export default function TaskItem({ task, onStatusChange }: TaskItemProps) {
  const priorityColors = {
    high: 'text-red-600',
    medium: 'text-amber-600',
    low: 'text-green-600'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-2 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onStatusChange(task.id, task.status === 'completed' ? 'pending' : 'completed')}
            className={`p-2 rounded-full transition-colors ${
              task.status === 'completed' ? 'bg-green-100' : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <Check className={`h-4 w-4 ${task.status === 'completed' ? 'text-green-600' : 'text-gray-400'}`} />
          </button>
          <div>
            <h3 className={`font-medium ${task.status === 'completed' ? 'line-through text-gray-400' : ''}`}>
              {task.title}
            </h3>
            {task.description && (
              <p className="text-sm text-gray-500">{task.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {task.due_date && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              {new Date(task.due_date).toLocaleDateString()}
            </div>
          )}
          <Flag className={`h-4 w-4 ${priorityColors[task.priority as keyof typeof priorityColors]}`} />
        </div>
      </div>
    </div>
  );
}