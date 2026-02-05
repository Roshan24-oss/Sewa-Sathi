import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [role, setRole] = useState("customer");

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-amber-600">
            Join SewaSathi
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Find or provide trusted local services
          </p>
        </div>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="98XXXXXXXX"
              className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              placeholder="••••••••"
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
                onClick={() => setRole("customer")}
                className={`w-1/2 py-2 rounded-xl font-medium border transition
                  ${
                    role === "customer"
                      ? "bg-amber-500 text-white border-amber-500"
                      : "bg-white text-gray-600 hover:bg-amber-50"
                  }`}
              >
                Customer
              </button>

              <button
                type="button"
                onClick={() => setRole("provider")}
                className={`w-1/2 py-2 rounded-xl font-medium border transition
                  ${
                    role === "provider"
                      ? "bg-amber-500 text-white border-amber-500"
                      : "bg-white text-gray-600 hover:bg-amber-50"
                  }`}
              >
                Provider
              </button>
            </div>
          </div>

          {/* Provider Service */}
          {role === "provider" && (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl">
              <label className="text-sm font-medium">
                Select Service
              </label>
              <select className="mt-1 w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-amber-400 outline-none">
                <option value="">Choose service</option>
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Create Account
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-amber-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
