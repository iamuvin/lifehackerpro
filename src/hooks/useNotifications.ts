import { create } from 'zustand';

interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface NotificationsStore {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
}

export const useNotifications = create<NotificationsStore>((set) => ({
  notifications: [],
  addNotification: (message) =>
    set((state) => ({
      notifications: [
        {
          id: crypto.randomUUID(),
          message,
          read: false,
          createdAt: new Date().toISOString(),
        },
        ...state.notifications,
      ],
    })),
  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),
  clearAll: () => set({ notifications: [] }),
}));