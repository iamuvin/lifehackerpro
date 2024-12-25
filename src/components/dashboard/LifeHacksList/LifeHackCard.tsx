import React from 'react';
import { ThumbsUp, Tag } from 'lucide-react';
import type { LifeHack } from '../../../types/lifeHack';

interface LifeHackCardProps {
  lifeHack: LifeHack;
}

export default function LifeHackCard({ lifeHack }: LifeHackCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-lg">{lifeHack.title}</h3>
        <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
          {lifeHack.category}
        </span>
      </div>
      
      <p className="text-gray-600 mb-4">{lifeHack.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {lifeHack.tags.map((tag, index) => (
            <span key={index} className="flex items-center text-sm text-gray-500">
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center text-gray-500">
          <ThumbsUp className="h-4 w-4 mr-1" />
          <span className="text-sm">{lifeHack.likes_count}</span>
        </div>
      </div>
    </div>
  );
}