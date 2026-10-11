import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { ShieldCheck, Award, Users, Calendar, Search, LogOut, UserCheck, ChevronDown, CheckCircle2, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  openAuthModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab, openAuthModal }) => {
  const { user, logout, switchUser, demoUsers } = useAuth();
  const [showDemoMenu, setShowDemoMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const getRoleBadge = (role?: string) => {
    switch (role) {
      case 'admin':
        return <span id="role-badge-admin" className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 border border-purple-200">Super Admin</span>;
      case 'issuer':
        return <span id="role-badge-issuer" className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 border border-blue-200">Issuer / College</span>;
      case 'student':
        return <span id="role-badge-student" className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">Student</span>;
      default:
        return <span id="role-badge-guest" className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-700">Guest</span>;
    }
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => { setCurrentTab('verify'); setShowMobileMenu(false); }}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-blue-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg tracking-tight text-slate-900">VeriCert</span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">SHA-256</span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">Digital Certificate Verification System</p>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
            <button
              id="nav-verify-btn"
              onClick={() => { setCurrentTab('verify'); setShowMobileMenu(false); }}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors ${
                currentTab === 'verify' 
                  ? 'bg-blue-50 text-blue-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Verify Certificate</span>
            </button>

            {user && (
              <button
                id="nav-dashboard-btn"
                onClick={() => { setCurrentTab('dashboard'); setShowMobileMenu(false); }}
                className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors ${
                  currentTab === 'dashboard' 
                    ? 'bg-blue-50 text-blue-700 font-semibold' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>
                  {user.role === 'admin' ? 'Admin Registry' : user.role === 'issuer' ? 'Issuer Portal' : 'My Certificates'}
                </span>
              </button>
            )}

            <button
              id="nav-leaderboard-btn"
              onClick={() => { setCurrentTab('leaderboard'); setShowMobileMenu(false); }}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors ${
                currentTab === 'leaderboard' 
                  ? 'bg-blue-50 text-blue-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Award className="w-4 h-4 text-amber-500" />
              <span>Leaderboard</span>
            </button>

            <button
              id="nav-events-btn"
              onClick={() => { setCurrentTab('events'); setShowMobileMenu(false); }}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors ${
                currentTab === 'events' 
                  ? 'bg-blue-50 text-blue-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </button>

            <button
              id="nav-institutions-btn"
              onClick={() => { setCurrentTab('institutions'); setShowMobileMenu(false); }}
              className={`px-3 py-2 rounded-lg flex items-center space-x-1.5 transition-colors ${
                currentTab === 'institutions' 
                  ? 'bg-blue-50 text-blue-700 font-semibold' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Institutions</span>
            </button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <button
            type="button"
            onClick={() => setShowMobileMenu(v => !v)}
            className="md:hidden p-2 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition"
            aria-label="Toggle navigation"
          >
            {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* User Controls & Demo Switcher */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Quick Demo Switcher Dropdown */}
            <div className="relative">
              <button
                id="demo-switcher-btn"
                onClick={() => setShowDemoMenu(!showDemoMenu)}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 transition shadow-2xs"
                title="Switch role instantly to test Student, Issuer, or Admin features"
              >
                <UserCheck className="w-3.5 h-3.5 text-blue-600" />
                <span className="hidden sm:inline">Role Switcher</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {showDemoMenu && (
                <div 
                  id="demo-switcher-dropdown"
                  className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-3 py-1.5 border-b border-slate-100">
                    <p className="text-xs font-semibold text-slate-800">Quick Test Accounts</p>
                    <p className="text-[11px] text-slate-500">Switch role instantaneously</p>
                  </div>
                  <div className="py-1 max-h-64 overflow-y-auto">
                    {demoUsers.map((du) => {
                      const isCurrent = user?.id === du.id;
                      return (
                        <button
                          key={du.id}
                          id={`switch-to-${du.id}`}
                          onClick={() => {
                            switchUser(du);
                            setShowDemoMenu(false);
                          }}
                          className={`w-full text-left px-3 py-2 flex items-center space-x-2.5 text-xs hover:bg-slate-50 transition ${
                            isCurrent ? 'bg-blue-50/70 font-semibold' : ''
                          }`}
                        >
                          <img
                            src={du.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${du.name}`}
                            alt={du.name}
                            className="w-7 h-7 rounded-full object-cover border border-slate-200"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="truncate text-slate-900">{du.name}</p>
                            <p className="text-[10px] text-slate-500 capitalize">{du.role} • {du.department || du.institution_name}</p>
                          </div>
                          {isCurrent && <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* User Session Profile or Login */}
            {user ? (
              <div className="flex items-center space-x-2 pl-2 border-l border-slate-200">
                <div className="hidden sm:flex flex-col items-end">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-xs font-semibold text-slate-900 max-w-[120px] truncate">{user.name}</span>
                    {getRoleBadge(user.role)}
                  </div>
                  <span className="text-[11px] text-slate-500 truncate max-w-[130px]">{user.institution_name || user.email}</span>
                </div>

                <img
                  src={user.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border border-slate-300 object-cover"
                />

                <button
                  id="logout-btn"
                  onClick={logout}
                  className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                  title="Logout"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                id="login-trigger-btn"
                onClick={openAuthModal}
                className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition shadow-xs"
              >
                Sign In
              </button>
            )}

          </div>
        </div>

        {/* Mobile Navigation */}
        {showMobileMenu && (
          <div className="md:hidden pb-4 pt-1 border-t border-slate-100">
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'verify', label: 'Verify Certificate', icon: Search },
                ...(user ? [{ id: 'dashboard', label: user.role === 'admin' ? 'Admin Registry' : user.role === 'issuer' ? 'Issuer Portal' : 'My Certificates', icon: Award }] : []),
                { id: 'events', label: 'Events', icon: Calendar },
                { id: 'institutions', label: 'Institutions', icon: Users },
                { id: 'leaderboard', label: 'Leaderboard', icon: Award },
              ].map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => { setCurrentTab(item.id); setShowMobileMenu(false); }}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition ${currentTab === item.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-700 hover:bg-slate-100'}`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-3 flex items-center justify-between gap-2 rounded-xl bg-slate-50 border border-slate-200 p-3">
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Session</p>
                <p className="text-xs font-semibold text-slate-800 truncate">{user ? `${user.name} • ${user.role}` : 'Guest verification mode'}</p>
              </div>
              {user ? (
                <button onClick={() => { logout(); setShowMobileMenu(false); }} className="px-3 py-1.5 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50">Logout</button>
              ) : (
                <button onClick={() => { openAuthModal(); setShowMobileMenu(false); }} className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold">Sign In</button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
