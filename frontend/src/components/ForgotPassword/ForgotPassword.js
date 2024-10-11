import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function Login() {
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
        <div
            className="container mt-5 justify-content-center"
            style={{ height: "auto" }}
        >
            <div className="row justify-content-center" style={{ width: "100%" }}>
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Forgot Password</h2>
                            {error && <div className="alert alert-danger">{error}</div>}
                            {message && (
                                <div className="alert alert-success">{message}</div>
                            )}
                            <form onSubmit={handleResetPassword}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email:
                                    </label>
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
                                Remember you password {" "}
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
        </div>
    );
}

export default Login;
