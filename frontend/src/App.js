import React from "react";


import { Routes, Route } from "react-router-dom"; 
import { useLocation } from "react-router-dom"; // Resolved spacing issue

// import { Routes, Route, useLocation } from "react-router-dom"; // Reso0b14a140d

import Navbar from "./components/Navbar/Navbar.js";
import Hom from "./pages/Home/Hom.js";
import Educ from "./components/Education/Educ.js";
import Quiz from "./components/Quiz/Quiz.js";
import Craft from "./components/Craft/Craft.js";
import Sef from "./components/Sef/Sef.js";
import Act from "./components/Act/Act.js";
import Login from "./components/Login/Login.js";
import Signup from "./components/Signup/Signup.js";
import Footer from "./components/Footer/Footer.js";
import About from "./pages/About/About.js";
import Loan from "./pages/Loan/Loan.js"; // Ensure the path is correct
import Contact from "./pages/Contact/Contact.js";
function App() {
  const location = useLocation();
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hom />} />
            <Route path="/loan" element={<Loan />} /> {/* Corrected this line */}
            <Route path="/about" element={<About />} />
            <Route path="/educ" element={<Educ />} />
            <Route path="/sef" element={<Sef />} />
            <Route path="/craft" element={<Craft />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/act" element={<Act />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} /> {/* Use lowercase for consistency */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {location.pathname !== "/login" && location.pathname.toLowerCase() !== "/signup" && <Footer />}      </div>
    </>
  );
}

export default App;
