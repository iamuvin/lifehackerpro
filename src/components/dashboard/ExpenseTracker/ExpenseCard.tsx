import React from 'react';
import { Calendar } from 'lucide-react';
import type { Expense } from '../../../types/expense';

interface ExpenseCardProps {
  expense: Expense;
}

export default function ExpenseCard({ expense }: ExpenseCardProps) {
  const categoryColors = {
    food: 'bg-green-100 text-green-800',
    transport: 'bg-blue-100 text-blue-800',
    utilities: 'bg-purple-100 text-purple-800',
    entertainment: 'bg-pink-100 text-pink-800',
    shopping: 'bg-yellow-100 text-yellow-800',
    other: 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <span className={`px-2 py-1 rounded-full text-sm ${
            categoryColors[expense.category as keyof typeof categoryColors] || categoryColors.other
          }`}>
            {expense.category}
          </span>
          {expense.description && (
            <p className="text-gray-600 mt-1">{expense.description}</p>
          )}
        </div>
        <span className="font-semibold text-lg">
          ${expense.amount.toFixed(2)}
        </span>
      </div>
      
      <div className="flex items-center text-gray-500 text-sm">
        <Calendar className="h-4 w-4 mr-1" />
        {new Date(expense.date).toLocaleDateString()}
      </div>
    </div>
  );
}