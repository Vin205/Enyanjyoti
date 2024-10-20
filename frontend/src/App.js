import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom"; 
import { useLocation } from "react-router-dom"; 
import Navbar from "./components/Navbar/Navbar.js";
import Hom from "./pages/Home/Hom.js";
import Educ from "./components/Education/Educ.js";
import Quiz from "./components/Quiz/Quiz.js";
import Craft from "./components/Craft/Craft.js";
import Sef from "./components/Sef/Sef.js";
import Act from "./components/Act/Act.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";
import Footer from "./components/Footer/Footer.js";
import About from "./pages/About/About.js";
import Loan from "./pages/Loan/Loan.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Contact from "./pages/Contact/Contact.js";
import Error from "./pages/Error/index.js";
import ContributorsPage from "./pages/Contributor/ContributorsPage.jsx";
import Preloader from "./pages/Preloader/Preloader.jsx";

function App() {
  const location = useLocation();

  // Preloader logic
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 5000); // Preloader visible for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isPreloaderVisible ? (
        <Preloader />
      ) : (
        <div>
          {location.pathname !== "/page-not-found" && <Navbar />}
          <main>
            <Routes>
              <Route path="/" element={<Hom />} />
              <Route path="/loan" element={<Loan />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/educ" element={<Educ />} />
              <Route path="/sef" element={<Sef />} />
              <Route path="/craft" element={<Craft />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/act" element={<Act />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/page-not-found" element={<Error />} />
              <Route path="/contributors" element={<ContributorsPage />} />
              <Route path="*" element={<Navigate to="/page-not-found" replace />} />
            </Routes>
          </main>
          {(location.pathname !== "/login" &&
            location.pathname.toLowerCase() !== "/signup" &&
            location.pathname.toLowerCase() !== "/forgot-password" &&
            location.pathname.toLowerCase() !== "/page-not-found") && <Footer />}
        </div>
      )}
    </>
  );
}

export default App;
