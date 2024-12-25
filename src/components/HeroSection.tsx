import React from 'react';
import { Sparkles, Brain, Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simplify Your Life with AI-Powered Solutions
          </h1>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Discover smart life hacks, manage tasks efficiently, and optimize your daily routine with intelligent automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition-colors">
              <Sparkles className="mr-2 h-5 w-5" />
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center transition-all">
              <Brain className="mr-2 h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-gray-100 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </div>
  );
}