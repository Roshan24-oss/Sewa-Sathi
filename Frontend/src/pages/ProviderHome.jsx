import { useEffect, useState, useCallback, useContext } from "react";
import axiosInstance from "../api/axiosInstance";
import socket from "../socket";
import { AuthContext } from "../context/AuthContext";

const ProviderHome = () => {
  const { user } = useContext(AuthContext);

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch existing requests
  const fetchRequests = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get("/requests/provider");
      setRequests(data);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch service requests.");
    } finally {
      setLoading(false);
    }
  }, []);


  useEffect(() => {
    if (!user?.id) return; 

    // Load old requests
    fetchRequests();

    // Join provider room
    if (!socket.connected) socket.connect();
    socket.emit("join", user.id);

    // Handle new requests
    const handleNewRequest = (data) => {
      console.log("New request received:", data);
      setRequests((prev) => [data.request, ...prev]);
    };
    socket.on("newRequest", handleNewRequest);

    // Cleanup listener
    return () => {
      socket.off("newRequest", handleNewRequest);
    };
  }, [user, fetchRequests]);

  // Update request status
  const updateStatus = async (id, status) => {
    try {
      // Optimistic UI update
      setRequests((prev) =>
        prev.map((req) => (req._id === id ? { ...req, status } : req))
      );

      await axiosInstance.put(`/requests/${id}`, { status });
    } catch (err) {
      console.error(err);
      setError("Failed to update status.");
      fetchRequests();
    }
  };

  // Badge color based on status
  const getStatusStyles = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 p-8 pt-28">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Provider Dashboard</h1>
        <p className="text-gray-500">Manage and respond to your service requests in real-time</p>
      </div>

      {/* Loading & Error States */}
      {loading && <p className="text-center text-gray-600 text-lg">Loading requests...</p>}
      {error && <p className="text-center text-red-500 mb-4">{error}</p>}
      {!loading && requests.length === 0 && (
        <div className="text-center text-gray-500 text-lg">No service requests available.</div>
      )}

      {/* Requests Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {requests.map((req) => (
          <div
            key={req._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 p-6 border border-gray-100 flex flex-col justify-between"
          >
            {/* Top Section */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {req.customerId?.fullName || "Unknown Customer"}
              </h2>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(req.status)}`}
              >
                {req.status}
              </span>
            </div>

            {/* Details */}
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <p>📅 <strong>Date:</strong> {new Date(req.date).toLocaleDateString()}</p>
              <p>⏰ <strong>Time:</strong> {req.time}</p>
              <p>📧 <strong>Email:</strong> {req.customerId?.email || "N/A"}</p>
            </div>

            {/* Action Buttons */}
            {req.status === "pending" && (
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => updateStatus(req._id, "accepted")}
                  
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition duration-200 shadow-md hover:scale-105"
                >
                  Accept
                </button>
                <button
                  onClick={() => updateStatus(req._id, "rejected")}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition duration-200 shadow-md hover:scale-105"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProviderHome;