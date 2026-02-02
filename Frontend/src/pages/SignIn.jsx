import React from 'react'

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-amber-100">
      <div className="w-[400px] border-2 border-amber-600 bg-white rounded-lg p-6">

        {/* Title */}
        <h1 className="text-2xl font-bold text-pink-600 text-center mb-6">
          SewaSathi
        </h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <span className="text-amber-600 cursor-pointer">
            Sign up
          </span>
        </p>

      </div>
    </div>
  )
}

export default SignIn
