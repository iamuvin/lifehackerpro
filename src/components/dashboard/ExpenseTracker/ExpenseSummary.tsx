import React from 'react';
import type { Expense } from '../../../types/expense';

interface ExpenseSummaryProps {
  expenses: Expense[];
}

export default function ExpenseSummary({ expenses }: ExpenseSummaryProps) {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  const expensesByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-4">
      <h3 className="font-semibold mb-2">Summary</h3>
      <p className="text-2xl font-bold text-indigo-600 mb-4">
        ${totalExpenses.toFixed(2)}
      </p>
      
      <div className="space-y-2">
        {Object.entries(expensesByCategory).map(([category, amount]) => (
          <div key={category} className="flex justify-between text-sm">
            <span className="capitalize">{category}</span>
            <span className="font-medium">${amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}