import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ui/theme-toggle';
import { GlassFilter } from './ui/liquid-glass-button';
import CinematicBackground from './CinematicBackground';
import { useTheme } from '../contexts/ThemeContext';
import {
  LayoutDashboard,
  CalendarCheck,
  Users,
  CalendarDays,
  MapPin,
  DollarSign,
  Package,
  Bot,
  Bell,
  Search,
  Menu,
  X,
  FileBarChart,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

// Custom SVG Logo Component to match the design provided
const KidaysLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 160 55" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Kidays Logo">
    {/* Yellow Swirl (Top Left) */}
    <path d="M12 16C10 12 6 12 4 15C2 18 5 21 8 20" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round" />

    {/* Main Text */}
    <text x="20" y="40" fontFamily="'Poppins', sans-serif" fontWeight="800" fontSize="38" fill="#1E3A8A" letterSpacing="-1.5">Kidays</text>

    {/* Red Square (Above 'a') */}
    <rect x="94" y="8" width="9" height="9" rx="1" transform="rotate(15 94 8)" fill="#EF4444" />

    {/* Pink Semi Circle (Bottom Left) */}
    <path d="M18 48C18 48 23 43 28 48" stroke="#F9A8D4" strokeWidth="4" strokeLinecap="round" fill="#F9A8D4" />

    {/* Green Burst (Right) */}
    <line x1="148" y1="16" x2="156" y2="12" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />
    <line x1="150" y1="24" x2="158" y2="28" stroke="#34D399" strokeWidth="4" strokeLinecap="round" />

    {/* Smile curve (Under 'days') */}
    <path d="M72 42 Q 102 58 132 40" stroke="#1E3A8A" strokeWidth="4" strokeLinecap="round" fill="none" />
  </svg>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    const path = location.pathname.split('/')[1];
    if (!path) return 'Dashboard';
    // Special case for AI Agents
    if (path === 'ai-agents') return 'AI Operations Center';
    return path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
  };

  const NavItem = ({ to, icon: Icon, label }: { to: string, icon: any, label: string }) => (
    <NavLink
      to={to}
      className={({ isActive }) => `
        flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group
        ${isActive
          ? 'bg-violet-50 dark:bg-violet-900/20 text-[#7C3AED] dark:text-violet-400 font-semibold'
          : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'}
      `}
    >
      <Icon size={20} />
      <span className="text-sm tracking-wide">{label}</span>
    </NavLink>
  );

  return (
    <div className="min-h-screen flex bg-[#F9FAFB] dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100 transition-colors duration-200 relative overflow-hidden">
      <CinematicBackground />

      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-64 fixed inset-y-0 left-0 bg-white dark:bg-gray-800 border-r border-gray-300 dark:border-gray-700 z-30 transition-colors duration-200">
        <div className="p-6 flex justify-center">
          <div className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => navigate('/')}>
            <KidaysLogo className="h-12 w-auto" />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2 mt-2">Platform</div>
          <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
          <NavItem to="/reservations" icon={CalendarCheck} label="Events" />
          <NavItem to="/calendar" icon={CalendarDays} label="Calendar" />

          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2 mt-6">Management</div>
          <NavItem to="/animators" icon={Users} label="Animators" />
          <NavItem to="/venues" icon={MapPin} label="Venues" />
          <NavItem to="/logistics" icon={Package} label="Logistics" />

          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2 mt-6">Admin</div>
          <NavItem to="/finance" icon={DollarSign} label="Finance" />
          <NavItem to="/reports" icon={FileBarChart} label="Reports" />
          <NavItem to="/ai-agents" icon={Bot} label="AI Agents" />
        </nav>


        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => navigate('/profile')}
          >
            <img
              src="https://picsum.photos/100/100?random=99"
              className="w-9 h-9 rounded-full object-cover"
              alt="Profile"
            />
            <div className="flex-1 overflow-hidden">
              <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">Marie Dupont</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">Ops Manager</div>
            </div>
            <ChevronRight size={16} className="text-gray-400" />
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">

        {/* Top Header */}
        <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700 px-6 py-3 flex items-center justify-between transition-colors duration-200">
          <div className="flex items-center gap-4">
            <button className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white font-poppins">{getPageTitle()}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search reservations, animators..."
                className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-[#7C3AED] focus:bg-white dark:focus:bg-gray-800 dark:text-white w-64 transition-all outline-none"
              />
            </div>

            <ThemeToggle />

            <button className="relative p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>

            <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
              <HelpCircle size={20} />
            </button>
          </div>
        </header>

        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-gray-900/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800 transition-colors duration-200">
              <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                  <KidaysLogo className="h-10 w-auto" />
                </div>
                <button onClick={() => setMobileMenuOpen(false)}><X size={24} className="text-gray-500" /></button>
              </div>
              <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
                <NavItem to="/reservations" icon={CalendarCheck} label="Events" />
                <NavItem to="/animators" icon={Users} label="Animators" />
                <NavItem to="/finance" icon={DollarSign} label="Finance" />
                <NavItem to="/ai-agents" icon={Bot} label="AI Agents" />
              </nav>
            </div>
          </div>
        )}

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <GlassFilter />
      </div>
    </div>
  );
};

export default Layout;