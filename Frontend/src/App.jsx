import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import MoreInfo from "./pages/MoreInfo.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import WhatsAppButton from "./components/WhatsApp.jsx";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;
