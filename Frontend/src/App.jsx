import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route

          path="/"
          element={
            <>
            
             <Navbar />

              <Hero className="bg-pink-300" />
              <Footer />
            </>
          }
        />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
  
    
    </>
     
  );
};

export default App;
