import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
  darkMode: boolean;
  notifications: boolean;
  twoFactorAuth: boolean;
  language: string;
  timezone: string;
}

interface SettingsState {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      settings: {
        darkMode: false,
        notifications: true,
        twoFactorAuth: false,
        language: 'en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      updateSettings: (updates) =>
        set((state) => ({
          settings: { ...state.settings, ...updates },
        })),
    }),
    {
      name: 'user-settings',
    }
  )
);