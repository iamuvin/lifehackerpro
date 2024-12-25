import React from 'react';
import { DollarSign } from 'lucide-react';
import { useDashboardStore } from '../../../store/dashboardStore';
import { useAuthStore } from '../../../store/authStore';
import ExpenseCard from './ExpenseCard';
import ExpenseForm from './ExpenseForm';
import ExpenseSummary from './ExpenseSummary';
import { api } from '../../../services/api';

export default function ExpenseTracker() {
  const { expenses, fetchDashboardData } = useDashboardStore();
  const { user } = useAuthStore();

  const handleAddExpense = async (expense: any) => {
    if (!user?.id) return;
    try {
      await api.expenses.create({
        ...expense,
        user_id: user.id
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <DollarSign className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Expenses</h2>
      </div>

      <ExpenseSummary expenses={expenses} />
      <ExpenseForm onSubmit={handleAddExpense} />

      <div className="space-y-4">
        {expenses.map((expense) => (
          <ExpenseCard key={expense.id} expense={expense} />
        ))}
      </div>
    </div>
  );
}