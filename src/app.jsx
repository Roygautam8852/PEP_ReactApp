import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import Login from './components/login/login';
import Signup from './components/singup/singup';
import Dashboard from './components/dashboard/dashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentView, setCurrentView] = useState('login');

  // Track list of registered users (initialized with a default user)
  const [registeredUsers, setRegisteredUsers] = useState([
    { name: 'Admin User', email: 'admin@example.com', password: 'password' }
  ]);

  const handleLogin = (email, password) => {
    // Check if the user is registered
    const user = registeredUsers.find(u => u.email === email);
    
    if (!user) {
      alert("User not found. Redirecting to Signup page...");
      setCurrentView('signup');
      return;
    }

    if (user.password !== password) {
      alert("Incorrect password. Please try again.");
      return;
    }

    // Success
    alert("Login successful!");
    setUserEmail(email);
    setIsLoggedIn(true);
    setCurrentView('dashboard');
  };

  const handleSignup = (name, email, password) => {
    // Check if email already exists
    const userExists = registeredUsers.some(u => u.email === email);
    if (userExists) {
      alert("Email is already registered. Please login instead.");
      setCurrentView('login');
      return;
    }

    // Register user
    const newUser = { name, email, password };
    setRegisteredUsers([...registeredUsers, newUser]);
    
    alert("Registration successful! Redirecting to Login...");
    setCurrentView('login');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setCurrentView('login');
  };

  return (
    <div>
      <Navbar 
        currentView={currentView} 
        onViewChange={(view) => {
          // If trying to access dashboard without being logged in, redirect to login
          if (view === 'dashboard' && !isLoggedIn) {
            setCurrentView('login');
          } else {
            setCurrentView(view);
          }
        }} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
      />

      <div className="content">
        {currentView === 'login' && (
          <Login 
            onLoginAttempt={handleLogin} 
            onSwitchToSignup={() => setCurrentView('signup')} 
          />
        )}

        {currentView === 'signup' && (
          <Signup 
            onSignupAttempt={handleSignup} 
            onSwitchToLogin={() => setCurrentView('login')} 
          />
        )}

        {currentView === 'dashboard' && (
          <Dashboard 
            userEmail={userEmail} 
            registeredUsers={registeredUsers}
          />
        )}
      </div>
    </div>
  );
}
