import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="relative">
        <Sparkles className="h-8 w-8 text-indigo-600 animate-pulse" />
        <div className="absolute -inset-1 bg-indigo-100 rounded-full blur-sm -z-10"></div>
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-coral-500 to-golden-500 bg-clip-text text-transparent animate-gradient">
        LifeHacker Pro
      </h1>
    </div>
  );
}