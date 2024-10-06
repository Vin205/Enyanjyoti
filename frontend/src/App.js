import React from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Resolved spacing issue
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

function App() {
  const location = useLocation();
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hom />} />
            <Route path="/about" element={<About />} />
            <Route path="/educ" element={<Educ />} />
            <Route path="/sef" element={<Sef />} />
            <Route path="/craft" element={<Craft />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/act" element={<Act />} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </main>
        {location.pathname !== "/login" && location.pathname.toLowerCase() !== "/signup" && <Footer />}      </div>
    </>
  );
}

export default App;
