import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-gray-600">
            App Designed and Created by{' '}
            <a 
              href="https://iamuvin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Uvin Vindula
            </a>
          </p>
          <p className="text-gray-600 mt-2">
            Contact: {' '}
            <a 
              href="tel:+94778888897" 
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              +94 77 888 8897
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}