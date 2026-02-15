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
import ProviderDashboard from "./components/ProviderDashboard.jsx";

const App = () => {
  const user= JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={user?.role==="provider"?<ProviderDashboard />:<Hero />} />
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
