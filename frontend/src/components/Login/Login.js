import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import GoogleButton from '../GoogleButton/GoogleButton';
import toast from "react-hot-toast";
import Footer from "../Footer/Footer";

// LoginHeader Component
const LoginHeader = () => (
  <h2 className="text-center mb-4">Login</h2>
);

// LoginForm Component
const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  handleLogin,
  loading,
  error,
  rememberMe,
  setRememberMe
}) => (
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
        style={{
          color: "black",
          position: "absolute",
          top: "37.5%",
          right: "60px",
          border: "none",
          cursor: "pointer"
        }}
        className="material-symbols-outlined"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "visibility_off" : "visibility"}
      </span>
    </div>

    {/* Remember Me Checkbox */}
    <div className="form-check mb-3">
      <input
        type="checkbox"
        className="form-check-input"
        id="rememberMe"
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
      />
      <label className="form-check-label ml-3" htmlFor="rememberMe">
        Remember Me
      </label>
    </div>

    <button
      type="submit"
      className="btn btn-primary w-100 mb-3"
      style={{ fontSize: '1.1rem', padding: '0.5rem', height: '50px' }}
      disabled={loading}>
      {loading ? "Logging in..." : "Login"}
    </button>
    <div className="text-center">
      <p>Or</p>
      <GoogleButton />
    </div>
  </form>
);

// LoginFooter Component
const LoginFooter = ({ navigate }) => (
  <>
    <p className="mt-3 text-center">
      Don't have an account?{" "}
      <span
        className="text-primary"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/signup")}
      >
        Sign Up
      </span>
    </p>
    <p className="text-center mt-2">
      <Link to="/forgot-password" className="text-muted">Forgot Password?</Link>
    </p>
  </>
);

function Login() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Auto-fill email from localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!regex.test(email)) {
      toast.error("Invalid Email");
      return;
    }

    // Save or remove email based on "Remember Me"
    if (rememberMe) {
      localStorage.setItem("rememberedEmail", email);
    } else {
      localStorage.removeItem("rememberedEmail");
    }

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
    <>
      <style>
        {`.signin-card {
            background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            padding: 2rem;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .signin-card:hover {
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
            transform: translateY(-5px);
          }
          .signin-title {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 1.5rem;
          }
        `}
      </style>
      <div
        className="container mx-auto mt-5 flex flex-col justify-center bg-cyan-500"
        style={{ height: "auto" }}
      >
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="col-md-6">
            <div className="card shadow signin-card">
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
                  rememberMe={rememberMe}
                  setRememberMe={setRememberMe}
                />
                <LoginFooter navigate={navigate} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
