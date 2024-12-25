import React, { useRef, useState } from 'react';
import { Bell } from 'lucide-react';
import { useNotificationsStore } from '../../store/notificationsStore';
import { useClickOutside } from '../../hooks/useClickOutside';

export default function NotificationsPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const { notifications, markAsRead, clearAll } = useNotificationsStore();
  
  useClickOutside(panelRef, () => setIsOpen(false));
  
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="relative" ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6 text-gray-500 hover:text-indigo-600" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-semibold">Notifications</h3>
            {notifications.length > 0 && (
              <button
                onClick={clearAll}
                className="text-sm text-gray-500 hover:text-indigo-600"
              >
                Clear all
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-gray-500 text-sm p-4">No notifications</p>
            ) : (
              notifications.map((notification) => (
                <button
                  key={notification.id}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                    !notification.read ? 'bg-indigo-50' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <p className="text-sm text-gray-800">{notification.message}</p>
                  <span className="text-xs text-gray-500">
                    {new Date(notification.createdAt).toLocaleDateString()}
                  </span>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}