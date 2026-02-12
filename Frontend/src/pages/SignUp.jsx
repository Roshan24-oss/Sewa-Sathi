import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    role: "customer",
    services: "",
  });

  const { fullName, email, phone, password, role, services } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (selectedRole) => {
    setFormData({
      ...formData,
      role: selectedRole,
      services: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );

      // Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      console.log("Signup Response:", res.data);

      alert("Signup successful ✅");

      // Redirect after signup
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-amber-600">Join SewaSathi</h2>
          <p className="text-sm text-gray-500 mt-1">
            Find or provide trusted local services
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Role Toggle */}
          <div>
            <label className="text-sm font-medium block mb-2">
              Register As
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => handleRoleChange("customer")}
                className={`w-1/2 py-2 rounded-xl font-medium border ${
                  role === "customer"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Customer
              </button>

              <button
                type="button"
                onClick={() => handleRoleChange("provider")}
                className={`w-1/2 py-2 rounded-xl font-medium border ${
                  role === "provider"
                    ? "bg-amber-500 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                Provider
              </button>
            </div>
          </div>

          {/* Provider Service */}
          {role === "provider" && (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
              <label className="text-sm font-medium">Select Service</label>
              <select
                name="services"
                value={services}
                onChange={handleChange}
                required
                className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
              >
                <option value="">Choose service</option>
                <option value="Plumber">Plumber</option>
                <option value="Electrician">Electrician</option>
                <option value="Tutor">Tutor</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Doctor">Doctor</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-amber-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
