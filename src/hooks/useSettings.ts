import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Settings {
  darkMode: boolean;
  notifications: boolean;
  twoFactorAuth: boolean;
}

interface SettingsStore {
  settings: Settings;
  updateSettings: (updates: Partial<Settings>) => void;
}

export const useSettings = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: {
        darkMode: false,
        notifications: true,
        twoFactorAuth: false,
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