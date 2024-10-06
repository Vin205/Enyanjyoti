// src/Login.js
import React, { useState } from 'react';
import { useNavigate, Link, replace } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
    console.log('Logging in with username:', username);
    alert('Login successful!'); // This would be replaced with actual logic

    // Clear fields after successful login
    setUsername('');
    setPassword('');
    navigate('/', {replace:true});
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  const handleOnClick = () => { // Define the handleOnClick function
    setShowPassword(!showPassword); // Toggle the showPassword state
  };


  return (
    <div className="container mt-5 justify-content-center" style={{ height: 'auto'}}>
      <div className="row justify-content-center" style={{ width: '100%'}}>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
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
                    type={showPassword ? 'text' : 'password'} // Toggle input type based on showPassword state
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button onClick={handleOnClick} style={{
                    backgroundColor: '#fff',
                    position: 'relative',
                    bottom: '30px',
                    left: '550px',
                    height: '1px'
                  }}>
                    <span style={{ color: "black", position: 'relative', bottom: '10px' }} className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'} {/* Toggle eye icon based on showPassword state */}
                    </span>
                  </button>
                  </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <p className="mt-3 text-center">
                Don't have an account? <span className="text-primary" style={{ cursor: 'pointer' }} onClick={handleSignupRedirect}>Sign Up</span>
              </p>
              <p className="text-center mt-2">
                <Link to="/forgot-password" className="text-muted">
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;