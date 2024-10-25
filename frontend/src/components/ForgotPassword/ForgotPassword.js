import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import Footer from "../Footer/Footer";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await sendPasswordResetEmail(auth, email);
            setLoading(false);
            setMessage("Password reset email sent! Please check your inbox.");
        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
    };

    return (
        <>
            <style>
                {`.forgot-password-card {
                    background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
                    border-radius: 20px;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                    padding: 2rem;
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                }
                .forgot-password-card:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
                    transform: translateY(-5px);
                }
                .forgot-password-title {
                    font-size: 1.8rem;
                    font-weight: bold;
                    color: #333;
                    text-align: center;
                    margin-bottom: 1.5rem;
                }
                `}
            </style>
            <div className="container mx-auto mt-5 flex flex-col justify-center bg-cyan-500" style={{ height: "auto" }}>
                <div className="row justify-content-center" style={{ width: "100%" }}>
                    <div className="col-md-6">
                        <div className="card shadow forgot-password-card">
                            <div className="card-body">
                                <h2 className="forgot-password-title">Forgot Password</h2>
                                {error && <div className="alert alert-danger">{error}</div>}
                                {message && <div className="alert alert-success">{message}</div>}
                                <form onSubmit={handleResetPassword}>
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
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                        disabled={loading}
                                    >
                                        {loading ? "Requesting..." : "Request password link"}
                                    </button>
                                </form>
                                <p className="mt-3 text-center">
                                    Remember your password?{" "}
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
        </>
    );
}

export default ForgotPassword;