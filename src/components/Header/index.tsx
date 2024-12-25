import React from 'react';
import Menu from './Menu';
import NotificationsPanel from './NotificationsPanel';
import SettingsPanel from './SettingsPanel';
import UserProfile from './UserProfile';
import Logo from '../auth/Logo';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="block sm:hidden">
              <Menu />
            </div>
            <div className="hidden sm:block">
              <Logo />
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <NotificationsPanel />
            <SettingsPanel />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}