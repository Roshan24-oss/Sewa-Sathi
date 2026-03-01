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

  const getStatusColor = (status) => {
    if (status === "accepted") return "bg-green-100 text-green-700";
    if (status === "rejected") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 mt-24">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        Your Booking Activities
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : requests.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((req) => (
            <div
              key={req._id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-orange-600 mb-2">
                {req.providerId?.fullName}
              </h3>

              <p className="text-sm text-gray-600">
                📅 {new Date(req.date).toLocaleDateString()}
              </p>

              <p className="text-sm text-gray-600">
                ⏰ {req.time}
              </p>

              <p className="text-sm text-gray-600">
                📞 {req.providerId?.phone}
              </p>

              <span
                className={`inline-block mt-3 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                  req.status
                )}`}
              >
                {req.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Activities;