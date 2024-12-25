import React from 'react';
import { Lightbulb } from 'lucide-react';
import { useDashboardStore } from '../../../store/dashboardStore';
import { useAuthStore } from '../../../store/authStore';
import LifeHackCard from './LifeHackCard';
import LifeHackForm from './LifeHackForm';
import { api } from '../../../services/api';

export default function LifeHacksList() {
  const { lifeHacks, fetchDashboardData } = useDashboardStore();
  const { user } = useAuthStore();

  const handleAddLifeHack = async (lifeHack: any) => {
    if (!user?.id) return;
    try {
      await api.lifeHacks.create({
        ...lifeHack,
        user_id: user.id
      });
      fetchDashboardData();
    } catch (error) {
      console.error('Error adding life hack:', error);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Lightbulb className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Life Hacks</h2>
      </div>

      <LifeHackForm onSubmit={handleAddLifeHack} />

      <div className="space-y-4">
        {lifeHacks.map((lifeHack) => (
          <LifeHackCard key={lifeHack.id} lifeHack={lifeHack} />
        ))}
      </div>
    </div>
  );
}