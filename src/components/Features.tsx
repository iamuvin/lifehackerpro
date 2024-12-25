import React from 'react';
import { Clock, Lightbulb, PieChart, ChefHat, Shield, Zap } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Smart Insights',
      description: 'AI-powered recommendations tailored to your lifestyle and preferences.',
      color: 'bg-indigo-600',
    },
    {
      icon: Clock,
      title: 'Task Management',
      description: 'Efficiently organize and automate your daily tasks and routines.',
      color: 'bg-coral-500',
    },
    {
      icon: PieChart,
      title: 'Budget Tracking',
      description: 'Smart expense tracking and personalized financial insights.',
      color: 'bg-emerald-500',
    },
    {
      icon: ChefHat,
      title: 'Recipe Builder',
      description: 'Create delicious meals with what you have in your kitchen.',
      color: 'bg-amber-500',
    },
    {
      icon: Shield,
      title: 'Emergency Toolkit',
      description: 'Quick solutions for common household emergencies.',
      color: 'bg-purple-500',
    },
    {
      icon: Zap,
      title: 'Quick Actions',
      description: 'Instant access to your most-used tools and features.',
      color: 'bg-blue-500',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}