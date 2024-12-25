import React, { useRef, useState } from 'react';
import { User, LogOut, Settings as SettingsIcon } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuthStore();
  
  useClickOutside(profileRef, () => setIsOpen(false));

  const handleSignOut = async () => {
    try {
      await signOut();
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="relative" ref={profileRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 w-8 bg-indigo-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-200 transition-colors"
        aria-label="User menu"
      >
        <User className="h-5 w-5 text-indigo-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="font-medium text-sm">{user?.email}</p>
          </div>
          <button
            onClick={() => {
              setIsOpen(false);
              // Handle settings navigation
            }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
          >
            <div className="flex items-center">
              <SettingsIcon className="h-4 w-4 mr-2" />
              Settings
            </div>
          </button>
          <button
            onClick={handleSignOut}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <div className="flex items-center">
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </div>
          </button>
        </div>
      )}
    </div>
  );
}