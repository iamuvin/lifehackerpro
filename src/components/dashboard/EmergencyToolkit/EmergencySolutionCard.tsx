import React from 'react';
import { AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import type { EmergencySolution } from '../../../types/emergencySolution';

interface EmergencySolutionCardProps {
  solution: EmergencySolution;
}

export default function EmergencySolutionCard({ solution }: EmergencySolutionCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-5 w-5 text-amber-500 mt-1" />
          <div>
            <h3 className="font-medium text-lg">{solution.title}</h3>
            <p className="text-gray-600 text-sm">{solution.description}</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </div>

      {isExpanded && (
        <div className="mt-4 pl-8">
          <ol className="list-decimal space-y-2">
            {solution.steps.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}