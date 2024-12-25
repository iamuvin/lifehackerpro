import React, { useRef, useState } from 'react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickOutside(menuRef, () => setIsOpen(false));

  const menuItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Tasks', href: '#tasks' },
    { label: 'Life Hacks', href: '#lifehacks' },
    { label: 'Expenses', href: '#expenses' },
    { label: 'Recipes', href: '#recipes' },
    { label: 'Emergency Toolkit', href: '#emergency' },
  ];

  const handleItemClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-indigo-600" />
        ) : (
          <MenuIcon className="h-6 w-6 text-indigo-600" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          {menuItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleItemClick(item.href)}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}