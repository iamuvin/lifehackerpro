import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

export default function FeatureCard({ icon: Icon, title, description, color }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105">
      <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4`}>
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}