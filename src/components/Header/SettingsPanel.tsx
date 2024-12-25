import React, { useRef, useState } from 'react';
import { Settings, Moon, Bell, Shield, Globe, Clock } from 'lucide-react';
import { useSettingsStore } from '../../store/settingsStore';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function SettingsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { settings, updateSettings } = useSettingsStore();
  
  useClickOutside(panelRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Settings"
      >
        <Settings className="h-6 w-6 text-gray-500 hover:text-indigo-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100">
            <h3 className="font-semibold">Settings</h3>
          </div>
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Moon className="h-5 w-5 text-gray-500" />
                <span>Dark Mode</span>
              </div>
              <button
                onClick={() => updateSettings({ darkMode: !settings.darkMode })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  settings.darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.darkMode ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bell className="h-5 w-5 text-gray-500" />
                <span>Notifications</span>
              </div>
              <button
                onClick={() => updateSettings({ notifications: !settings.notifications })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  settings.notifications ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-gray-500" />
                <span>Two-Factor Auth</span>
              </div>
              <button
                onClick={() => updateSettings({ twoFactorAuth: !settings.twoFactorAuth })}
                className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                  settings.twoFactorAuth ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.twoFactorAuth ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-gray-500" />
                <span>Language</span>
              </div>
              <select
                value={settings.language}
                onChange={(e) => updateSettings({ language: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span>Timezone</span>
              </div>
              <select
                value={settings.timezone}
                onChange={(e) => updateSettings({ timezone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}