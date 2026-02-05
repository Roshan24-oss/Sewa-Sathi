import React, { useState } from "react";
import {Link} from "react-router-dom"

const SignUp = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="bg-amber-100 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-md p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-amber-600 mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="roshan@gmail.com"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="98XXXXXXXX"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Register As
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="customer"
                  checked={role === "customer"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Customer
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="provider"
                  checked={role === "provider"}
                  onChange={(e) => setRole(e.target.value)}
                />
                Service Provider
              </label>
            </div>
          </div>

          {/* Service Type (only for provider) */}
          {role === "provider" && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Service Type
              </label>
              <select className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400">
                <option value="">Select Service</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Tutor</option>
                <option>Carpenter</option>
                <option>Doctor</option>
                <option>Cleaner</option>
                <option>Other</option>
              </select>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded-lg font-semibold hover:bg-amber-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
         <Link to="/signin" className="text-amber-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
