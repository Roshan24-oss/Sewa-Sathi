import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const ProviderHome = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await axiosInstance.get("/requests/provider");
      setRequests(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axiosInstance.put(`/requests/${id}`, { status });
      fetchRequests();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-6 pt-30 text-center min-h-screen w-full bg-gray-400 ">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">Service Requests</h2>

      {requests.map((req) => (
        <div key={req._id} className="border p-4 mb-3 rounded shadow">
          <p><strong>Customer:</strong> {req.customerId.fullName}</p>
          <p><strong>Date:</strong> {req.date}</p>
          <p><strong>Time:</strong> {req.time}</p>
          <p><strong>Status:</strong> {req.status}</p>

          {req.status === "pending" && (
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => updateStatus(req._id, "accepted")}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Accept
              </button>

              <button
                onClick={() => updateStatus(req._id, "rejected")}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Reject
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProviderHome;