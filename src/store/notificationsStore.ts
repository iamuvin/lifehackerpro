import { create } from 'zustand';

interface Notification {
  id: string;
  message: string;
  read: boolean;
  createdAt: string;
}

interface NotificationsState {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: string) => void;
  clearAll: () => void;
}

export const useNotificationsStore = create<NotificationsState>((set) => ({
  notifications: [
    {
      id: '1',
      message: 'Welcome to LifeHacker Pro! Explore our features to get started.',
      read: false,
      createdAt: new Date().toISOString()
    },
    {
      id: '2',
      message: 'New life hack added: "10 Tips for Better Time Management"',
      read: false,
      createdAt: new Date(Date.now() - 3600000).toISOString()
    }
  ],
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