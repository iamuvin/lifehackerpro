import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import type { LifeHack } from '../../../types/lifeHack';

interface LifeHackFormProps {
  onSubmit: (lifeHack: Omit<LifeHack, 'id' | 'created_at' | 'updated_at' | 'likes_count'>) => void;
}

export default function LifeHackForm({ onSubmit }: LifeHackFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('productivity');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      category,
      tags: tags.split(',').map(tag => tag.trim()).filter(Boolean),
      user_id: '' // Will be set by the API
    });
    setTitle('');
    setDescription('');
    setCategory('productivity');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-4 mb-4">
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Life hack title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={3}
          required
        />
        
        <div className="flex space-x-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="productivity">Productivity</option>
            <option value="health">Health</option>
            <option value="finance">Finance</option>
            <option value="technology">Technology</option>
            <option value="lifestyle">Lifestyle</option>
          </select>
          
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Life Hack
        </button>
      </div>
    </form>
  );
}