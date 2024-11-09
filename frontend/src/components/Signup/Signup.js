import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { registerValidation } from "../../validations/validation";
import { auth, signInWithGoogle } from "../Firebase/firebase"; // Import Firebase auth and Google sign-in
import GoogleButton from '../GoogleButton/GoogleButton';
import toast from "react-hot-toast";
import Footer from "../Footer/Footer.js";

function Signup() {
  const trustedDomains = ["gmail.com", "yahoo.com", "outlook.com", "icloud.com", "hotmail.com"];
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState(""); // State for email validation feedback
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, firebaseError] =
    useCreateUserWithEmailAndPassword(auth);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        navigate("/dashboard", { replace: true });
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check email format
    if (!regex.test(email)) {
      toast.error("Invalid email");
      return;
    }

    // Check email domain
    const emailDomain = email.split("@")[1];
    if (!trustedDomains.includes(emailDomain)) {
      setEmailError("Please use a trusted email provider (Gmail, Yahoo, Outlook, iCloud, Hotmail).");
      return;
    } else {
      setEmailError(""); // Clear error if valid
    }

    try {
      await registerValidation.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      setErrors({});
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
      return;
    }

    // Firebase signup
    try {
      await createUserWithEmailAndPassword(email, password);
      setSuccessMessage("Signup successful! Redirecting to login...");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 2000); // Redirect after 2 seconds
    } catch (firebaseError) {
      setError(firebaseError?.message || "Error signing up.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard"); // Redirect after successful Google sign-in
    } catch (error) {
      setError("Error signing in with Google.");
    }
  };

  return (
    <>
      <style>
        {`
          .signup-card {
            background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            padding: 2rem;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }
          .signup-card:hover {
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
            transform: translateY(-5px);
          }
          .signup-title {
            font-size: 1.8rem;
            font-weight: bold;
            color: #333;
            text-align: center;
            margin-bottom: 1.5rem;
          }
          .form-label {
            color: #555;
            font-weight: 500;
          }
          .form-control {
            padding: 0.75rem;
            border-radius: 10px;
            border: 1px solid #ddd;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          .form-control:focus {
            border-color: #007bff;
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
          }
          .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
            padding: 0.75rem;
            font-size: 1rem;
            border-radius: 10px;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .btn-primary:hover {
            background-color: #0056b3;
            transform: translateY(-2px);
          }
          .google-btn {
            background-color: #db4437;
            border-color: #db4437;
            padding: 0.75rem;
            border-radius: 10px;
            transition: background-color 0.3s ease, transform 0.3s ease;
          }
          .google-btn:hover {
            background-color: #c23321;
            transform: translateY(-2px);
          }
        `}
      </style>
      <div className="container mx-auto mt-5 flex flex-col justify-center bg-cyan-500" style={{ height: "auto" }}>
        <div className="row justify-content-center" style={{ width: "100%" }}>
          <div className="col-md-6">
            <div className="card shadow signup-card">
              <div className="card-body">
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {successMessage && (
                  <div className="alert alert-success">{successMessage}</div>
                )}
                {emailError && <div className="alert alert-danger">{emailError}</div>} {/* Email error message */}
                <form onSubmit={handleSignup} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError(""); // Clear email error on change
                      }}
                    />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                  </div>
                  <div style={{ position: "relative", width: "100%" }} className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
                      title="Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long"
                      required
                    />
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                    <span
                      style={{
                        color: "black",
                        position: "absolute",
                        top: "55%",
                        right: "10px",
                        backgroundColor: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="material-symbols-outlined"
                      onClick={handlePasswordVisibility}
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </div>

                  <div className="mb-3" style={{ position: "relative", width: "100%" }}>
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="form-control"
                      placeholder="Confirm your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$"
                      title="Password must contain at least one number, one alphabet, one symbol, and be at least 8 characters long"
                      required
                    />
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                    <span
                      style={{
                        color: "black",
                        position: "absolute",
                        top: "55%",
                        right: "10px",
                        backgroundColor: "#fff",
                        border: "none",
                        cursor: "pointer",
                      }}
                      className="material-symbols-outlined"
                      onClick={handleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? "visibility_off" : "visibility"}
                    </span>
                  </div>

                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">
                      Sign Up
                    </button>
                  </div>
                  <div className="mb-3 text-center">
                    <span>or</span>
                  </div>
                  <div className="mb-3">
                    <GoogleButton handleGoogleSignIn={handleGoogleSignup} />
                  </div>
                  <div className="text-center">
                    <span>
                      Already have an account? <a href="/login">Login</a>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
