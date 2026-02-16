import React from "react";

const ProviderHome = () => {
  return (
    <div className="mt-24 px-6 py-6 bg-gray-50 min-h-screen">
      
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Provider Dashboard
      </h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Pending Requests</h2>
          <p className="text-2xl font-bold text-yellow-500 mt-2">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Completed Jobs</h2>
          <p className="text-2xl font-bold text-green-500 mt-2">48</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Total Earnings</h2>
          <p className="text-2xl font-bold text-blue-500 mt-2">₹25,000</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500">Rating</h2>
          <p className="text-2xl font-bold text-purple-500 mt-2">4.8 ⭐</p>
        </div>

      </div>

      {/* Recent Requests Section */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>

        <div className="space-y-4">
          
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="font-semibold">Rahul Sharma</p>
              <p className="text-sm text-gray-500">Plumbing Service • 12 Feb 2026</p>
            </div>
            <div className="space-x-2">
              <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                Accept
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Reject
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
            <div>
              <p className="font-semibold">Priya Singh</p>
              <p className="text-sm text-gray-500">Home Nursing • 10 Feb 2026</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
              Pending
            </span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ProviderHome;
