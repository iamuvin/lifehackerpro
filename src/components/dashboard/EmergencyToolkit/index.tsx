import React, { useState, useMemo } from 'react';
import { Wrench } from 'lucide-react';
import { useDashboardStore } from '../../../store/dashboardStore';
import EmergencySolutionCard from './EmergencySolutionCard';
import CategoryFilter from './CategoryFilter';
import SearchBar from './SearchBar';

export default function EmergencyToolkit() {
  const { emergencySolutions } = useDashboardStore();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = new Set(emergencySolutions.map(solution => solution.category));
    return Array.from(uniqueCategories);
  }, [emergencySolutions]);

  const filteredSolutions = useMemo(() => {
    return emergencySolutions.filter(solution => {
      const matchesCategory = selectedCategory === 'all' || solution.category === selectedCategory;
      const matchesSearch = solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          solution.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [emergencySolutions, selectedCategory, searchQuery]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-6">
        <Wrench className="h-6 w-6 text-indigo-600 mr-2" />
        <h2 className="text-xl font-semibold">Emergency Toolkit</h2>
      </div>

      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="space-y-4">
        {filteredSolutions.map((solution) => (
          <EmergencySolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </div>
  );
}