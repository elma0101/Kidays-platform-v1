import React from 'react';
import { MemoryRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Reservations from './pages/Reservations';
import Animators from './pages/Animators';
import CalendarPage from './pages/Calendar';
import AIAgents from './pages/AIAgents';
import Venues from './pages/Venues';
import Finance from './pages/Finance';
import Logistics from './pages/Logistics';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

// Placeholder for missing pages
const Placeholder = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-[50vh] text-center">
    <div className="text-6xl mb-4">🚧</div>
    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{title}</h2>
    <p className="text-gray-500 dark:text-gray-400">This module is part of Phase 2 development.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/animators" element={<Animators />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/venues" element={<Venues />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/ai-agents" element={<AIAgents />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/settings" element={<Placeholder title="Settings" />} />
          <Route path="/help" element={<Placeholder title="Help Center" />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;