import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";

// LoginHeader Component
const LoginHeader = () => (
  <h2 className="text-center mb-4">Login</h2>
);

// LoginForm Component
const LoginForm = ({ email, setEmail, password, setPassword, showPassword, setShowPassword, handleLogin, loading, error }) => (
  <form onSubmit={handleLogin}>
    {error && <div className="alert alert-danger">{error.message}</div>}
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email:</label>
      <input
        type="email"
        id="email"
        className="form-control"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password:</label>
      <input
        type={showPassword ? "text" : "password"}
        id="password"
        className="form-control"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <span
        style={{ color: "black", position: "absolute", top: "49%", right: "25px", border: "none", cursor: "pointer" }}
        className="material-symbols-outlined"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "visibility_off" : "visibility"}
      </span>
    </div>
    <button type="submit" className="btn btn-primary w-100" disabled={loading}>
      {loading ? "Logging in..." : "Login"}
    </button>
  </form>
);

// LoginFooter Component
const LoginFooter = ({ navigate }) => (
  <>
    <p className="mt-3 text-center">
      Don't have an account?{" "}
      <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate("/signup")}>
        Sign Up
      </span>
    </p>
    <p className="text-center mt-2">
      <Link to="/forgot-password" className="text-muted">Forgot Password?</Link>
    </p>
  </>
);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        navigate("/dashboard", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="container mt-5 justify-content-center" style={{ height: "auto" }}>
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <LoginHeader />
              <LoginForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                handleLogin={handleLogin}
                loading={loading}
                error={error}
              />
              <LoginFooter navigate={navigate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;