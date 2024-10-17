import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { registerValidation } from "../../validations/validation";
import { auth, signInWithGoogle } from "../Firebase/firebase";
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
  const [emailError, setEmailError] = useState("");
  
  // New password criteria state
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  
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

  // Real-time password validation function
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Update password criteria as the user types
    setPasswordCriteria({
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value),
    });
  };

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
      setEmailError("");
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

    try {
      await createUserWithEmailAndPassword(email, password);
      setSuccessMessage("Signup successful! Redirecting to login...");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (firebaseError) {
      setError(firebaseError?.message || "Error signing up.");
    }
  };

  return (
    <div className="container mt-5 justify-content-center" style={{ height: "auto" }}>
      <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}
              {emailError && <div className="alert alert-danger">{emailError}</div>}
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
                      setEmailError("");
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
                    onChange={handlePasswordChange}  // Real-time validation
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

                {/* Password validation feedback */}
                <ul className="text-muted">
                  <li style={{ color: passwordCriteria.length ? "green" : "red" }}>
                    At least 8 characters long
                  </li>
                  <li style={{ color: passwordCriteria.uppercase ? "green" : "red" }}>
                    At least 1 uppercase letter (A-Z)
                  </li>
                  <li style={{ color: passwordCriteria.lowercase ? "green" : "red" }}>
                    At least 1 lowercase letter (a-z)
                  </li>
                  <li style={{ color: passwordCriteria.number ? "green" : "red" }}>
                    At least 1 number (0-9)
                  </li>
                  <li style={{ color: passwordCriteria.specialChar ? "green" : "red" }}>
                    At least 1 special character (e.g., !@#$%^&*())
                  </li>
                </ul>

                <div className="mb-3" style={{ position: "relative", width: "100%" }}>
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </form>
              <div className="text-center mt-3">
                <GoogleButton onClick={handleGoogleSignup} />
              </div>
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <span
                  className="text-primary"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
