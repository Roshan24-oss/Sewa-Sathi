import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const ProviderDashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    address: "",
    experience: "",
    skills: "",
    availability: "",
    about: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post(
        "/provider/providerprofile",
        formData
      );

      const updatedUser = res.data.user;

      // Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Redirect to provider home
      navigate("/providerhome");

    } catch (error) {
      console.error(error);
      alert("Error updating profile ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-20">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          Welcome {user?.fullName} 👋
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Service: {user?.services}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block font-medium mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Experience (Years)</label>
            <input
              type="number"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Skills</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g Pipe fixing, Wiring, Math tutoring"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              placeholder="e.g 9AM - 6PM"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">About You</label>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-3 rounded-xl font-semibold hover:bg-orange-700 transition"
          >
            Save Profile
          </button>

        </form>
      </div>
    </div>
  );
};

export default ProviderDashboard;
