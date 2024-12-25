import React, { useEffect } from 'react';
import { useAuthStore } from '../../store/authStore';
import { useDashboardStore } from '../../store/dashboardStore';
import Header from '../Header';
import TasksList from './TasksList';
import LifeHacksList from './LifeHacksList';
import ExpenseTracker from './ExpenseTracker';
import RecipesList from './RecipesList';
import EmergencyToolkit from './EmergencyToolkit';
import Footer from '../Footer';

export default function DashboardLayout() {
  const { user } = useAuthStore();
  const { fetchDashboardData, loading, error } = useDashboardStore();

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user, fetchDashboardData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-red-50 p-4 rounded-lg max-w-md w-full">
          <p className="text-red-700 text-center">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <TasksList />
          </div>
          <LifeHacksList />
          <ExpenseTracker />
          <RecipesList />
          <div className="col-span-1 md:col-span-2 xl:col-span-3">
            <EmergencyToolkit />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}