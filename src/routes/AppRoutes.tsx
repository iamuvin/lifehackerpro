import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthForm from '../components/auth/AuthForm';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ProtectedRoute from '../components/layout/ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthForm />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}