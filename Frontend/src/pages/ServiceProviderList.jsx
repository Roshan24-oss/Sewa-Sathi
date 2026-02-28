import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const ServiceProviderList = () => {
  const { user } = useContext(AuthContext);
  const { serviceType } = useParams();

  const [providers, setProviders] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Providers
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        setLoading(true);
        const res = await axiosInstance.get(`/provider/${serviceType}`);
        setProviders(res.data);
      } catch (error) {
        console.error("Error fetching providers:", error);
        setError("Failed to load providers.");
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, [serviceType]);

  // Handle Date Change
  const handleDateChange = (providerId, value) => {
    setBookingDetails((prev) => ({
      ...prev,
      [providerId]: {
        ...prev[providerId],
        date: value,
      },
    }));
  };

  // Handle Time Change
  const handleTimeChange = (providerId, value) => {
    setBookingDetails((prev) => ({
      ...prev,
      [providerId]: {
        ...prev[providerId],
        time: value,
      },
    }));
  };

  // Handle Request
  const handleRequest = async (providerId) => {
    if (!user) {
      alert("Please login first");
      return;
    }

    const selectedDate = bookingDetails[providerId]?.date;
    const selectedTime = bookingDetails[providerId]?.time;

    if (!selectedDate || !selectedTime) {
      alert("Please select date and time");
      return;
    }

    try {
      await axiosInstance.post("/requests", {
        providerId,
        serviceType,
        date: selectedDate,
        time: selectedTime,
      });

      alert("Request Sent Successfully!");

      setBookingDetails((prev) => ({
        ...prev,
        [providerId]: { date: "", time: "" },
      }));
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 p-6 mt-20">
      
      <h2 className="text-center text-4xl font-extrabold text-orange-700 mb-10 tracking-wide">
        Available {serviceType?.toUpperCase()} Services
      </h2>

      {/* Loading */}
      {loading && (
        <p className="text-center text-lg font-semibold text-gray-700">
          Loading providers...
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-center text-red-600 font-semibold">{error}</p>
      )}

      {/* No Providers */}
      {!loading && providers.length === 0 && (
        <p className="text-center text-gray-700 text-lg mt-10">
          No providers available right now.
        </p>
      )}

      {/* Provider Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {providers.map((provider) => {
          const isValid =
            bookingDetails[provider._id]?.date &&
            bookingDetails[provider._id]?.time;

          return (
            <div
              key={provider._id}
              className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between transform hover:scale-105 transition duration-300"
            >
              {/* Provider Info */}
              <div>
                <h3 className="text-2xl font-bold text-orange-600 mb-3">
                  {provider.fullName}
                </h3>

                <div className="space-y-1 text-gray-700 text-sm">
                  <p><strong>Experience:</strong> {provider.experience} years</p>
                  <p><strong>Address:</strong> {provider.address}</p>
                  <p><strong>Skills:</strong> {provider.skills}</p>
                  <p><strong>Phone:</strong> {provider.phone}</p>
                  <p><strong>Availability:</strong> {provider.availability}</p>
                </div>

                <p className="mt-3 text-gray-600 text-sm italic">
                  {provider.about}
                </p>

                {/* Booking Section */}
                <div className="mt-4">
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={bookingDetails[provider._id]?.date || ""}
                    onChange={(e) =>
                      handleDateChange(provider._id, e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <input
                    type="time"
                    value={bookingDetails[provider._id]?.time || ""}
                    onChange={(e) =>
                      handleTimeChange(provider._id, e.target.value)
                    }
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
              </div>

              {/* Request Button */}
              <button
                disabled={!isValid}
                onClick={() => handleRequest(provider._id)}
                className={`mt-6 py-2 px-4 rounded-xl font-semibold transition duration-300 ${
                  isValid
                    ? "bg-orange-600 text-white hover:bg-orange-700 shadow-md"
                    : "bg-gray-400 text-gray-200 cursor-not-allowed"
                }`}
              >
                Request Service
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceProviderList;