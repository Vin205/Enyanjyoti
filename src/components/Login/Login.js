// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    // Basic validation
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    // Placeholder for actual login logic
    console.log('Logging in with:', { username, password });
    alert('Login successful!'); // This would be replaced with actual logic

    // Clear fields after successful login
    setUsername('');
    setPassword('');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="mt-5 mx-auto">
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin} className=' p-4'>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100 ">Login</button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handleSignupRedirect}>Sign Up</span>
              </p>
              <p className="text-center mt-2">
                <a href="#" className="text-muted">Forgot Password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
