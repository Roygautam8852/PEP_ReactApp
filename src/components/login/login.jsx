import React, { useState } from 'react';
import './login.css';

export default function Login({ onLoginAttempt, onSwitchToSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }
    onLoginAttempt(email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <div className="switch-text">
          Don't have an account?{' '}
          <span className="switch-link" onClick={onSwitchToSignup}>
            Signup
          </span>
        </div>
      </div>
    </div>
  );
}
