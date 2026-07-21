import React from 'react';
import './navbar.css';

export default function Navbar({ currentView, onViewChange, isLoggedIn, onLogout }) {
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => onViewChange(isLoggedIn ? 'dashboard' : 'login')}>
        My React App
      </div>

      <div className="nav-actions">
        {isLoggedIn ? (
          <>
            <span 
              className={`nav-item ${currentView === 'dashboard' ? 'active' : ''}`}
              onClick={() => onViewChange('dashboard')}
              style={{ marginRight: '20px' }}
            >
              Dashboard
            </span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <div className="auth-buttons">
            <span 
              className={`nav-item ${currentView === 'login' ? 'active' : ''}`}
              onClick={() => onViewChange('login')}
            >
              Login
            </span>
            <span 
              className={`nav-item ${currentView === 'signup' ? 'active' : ''}`}
              onClick={() => onViewChange('signup')}
            >
              Signup
            </span>
          </div>
        )}
      </div>
    </nav>
  );
}
