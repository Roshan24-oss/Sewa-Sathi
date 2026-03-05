import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Activities = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const { data } = await axiosInstance.get("/requests/activities");
        setRequests(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const getStatusStyle = (status) => {
    if (status === "accepted")
      return "bg-green-100 text-green-700 border-green-300";
    if (status === "rejected")
      return "bg-red-100 text-red-700 border-red-300";
    return "bg-yellow-100 text-yellow-700 border-yellow-300";
  };

  const openWhatsApp = (phone, providerName) => {
    const message = `Hello ${providerName}, I booked your service through the website.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8 mt-24">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        📋 Your Booking Activities
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading your bookings...</p>
      ) : requests.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          You have not made any bookings yet.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-orange-600 mb-4">
                👨‍🔧 {req.providerId?.fullName}
              </h3>

              <div className="space-y-2 text-gray-600">
                <p>📅 Date: {new Date(req.date).toLocaleDateString()}</p>
                <p>⏰ Time: {req.time}</p>
                <p>📞 Phone: {req.providerId?.phone}</p>
              </div>

              <div className="mt-4">
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full border ${getStatusStyle(
                    req.status
                  )}`}
                >
                  {req.status.toUpperCase()}
                </span>
              </div>

              {req.status === "accepted" && (
                <button
                  onClick={() =>
                    openWhatsApp(req.providerId?.phone, req.providerId?.fullName)
                  }
                  className="mt-5 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition duration-200"
                >
                  💬 Chat on WhatsApp
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;