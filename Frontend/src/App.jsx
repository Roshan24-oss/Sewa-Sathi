import React, { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import WhatsAppButton from "./components/WhatsApp.jsx";
import ProviderDashboard from "./components/ProviderDashboard.jsx";
import ProviderHome from "./pages/ProviderHome.jsx";
import ServiceProviderList from "./pages/ServiceProviderList.jsx";
import MoreInfo from "./pages/MoreInfo.jsx"; 
import Activities from "./pages/Activities.jsx";

import { AuthContext } from "./context/AuthContext.jsx";
import socket from "./socket.js";

const App = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
    
      socket.emit("join", user.id);
    }

    socket.on("requestStatusUpdated", (data) => {
      alert(data.message); 
      console.log("Request status updated:", data);
    });

    return () => {
      socket.off("requestStatusUpdated");
    };
  }, [user]); 

  return (
    <>
      <Navbar />

      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            user?.role === "provider"
              ? user.address
                ? <ProviderHome />
                : <ProviderDashboard />
              : <Hero />
          }
        />

        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Other Pages */}
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/activities"  element={user?.role === "customer" ? <Activities /> : null} />

        {/* Provider Routes */}
        <Route path="/providerdashboard" element={<ProviderDashboard />} />
        <Route path="/providerhome" element={<ProviderHome />} />

        {/* Dynamic Providers */}
        <Route path="/providers/:serviceType" element={<ServiceProviderList />} />

        {/* 404 Route */}
        <Route
          path="*"
          element={
            <h1 className="text-center mt-20 text-2xl">
              Page Not Found
            </h1>
          }
        />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default App;