import React from 'react';
import Menu from './Header/Menu';
import NotificationsPanel from './Header/NotificationsPanel';
import SettingsPanel from './Header/SettingsPanel';
import UserProfile from './Header/UserProfile';
import Logo from './auth/Logo';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Menu />
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <NotificationsPanel />
            <SettingsPanel />
            <UserProfile />
          </div>
        </div>
      </div>
    </header>
  );
}