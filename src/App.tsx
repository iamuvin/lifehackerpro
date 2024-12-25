import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { useAuthStore } from './store/authStore';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const initialize = useAuthStore(state => state.initialize);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <AppRoutes />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}