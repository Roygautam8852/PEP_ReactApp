import React, { useState } from 'react';
import './singup.css';

export default function Signup({ onSignupAttempt, onSwitchToLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('Please fill in all fields');
      return;
    }
    onSignupAttempt(name, email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Signup</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
            Signup
          </button>
        </form>

        <div className="switch-text">
          Already have an account?{' '}
          <span className="switch-link" onClick={onSwitchToLogin}>
            Login
          </span>
        </div>
      </div>
    </div>
  );
}
