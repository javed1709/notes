import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import NotePage from './components/NotePage';
import HistoryPage from './components/HistoryPage';
import SettingsPage from './components/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth/:type" element={<AuthPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/note/:id?" element={<NotePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
}

export default App;