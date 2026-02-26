import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const ServiceProviderList = () => {
  const { user } = useContext(AuthContext);
  const { serviceType } = useParams();

  const [providers, setProviders] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({}); // Store date & time per provider

  // Fetch Providers
  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axiosInstance.get(`/provider/${serviceType}`);
        setProviders(res.data);
      } catch (error) {
        console.error("Error fetching providers:", error);
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

      // Clear only this provider's booking data
      setBookingDetails((prev) => ({
        ...prev,
        [providerId]: { date: "", time: "" },
      }));
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  return (
    <div className="min-h-screen bg-amber-100 p-6 mt-20">
      <h2 className="text-center text-3xl font-extrabold text-blue-600 mb-8">
        AVAILABLE {serviceType?.toUpperCase()} LIST
      </h2>

      {providers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg mt-10">
          No providers available
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider) => (
            <div
              key={provider._id}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition flex flex-col justify-between"
            >
              {/* Provider Info */}
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {provider.fullName}
                </h3>

                <p><strong>Experience:</strong> {provider.experience} years</p>
                <p><strong>Address:</strong> {provider.address}</p>
                <p><strong>Skills:</strong> {provider.skills}</p>
                <p><strong>Phone:</strong> {provider.phone}</p>
                <p><strong>Availability:</strong> {provider.availability}</p>
                <p className="mb-3"><strong>About:</strong> {provider.about}</p>

                {/* Date & Time Picker */}
                <div className="mb-3">
                  <input
                    type="date"
                    value={bookingDetails[provider._id]?.date || ""}
                    onChange={(e) =>
                      handleDateChange(provider._id, e.target.value)
                    }
                    className="w-full mb-2 p-2 border rounded"
                  />

                  <input
                    type="time"
                    value={bookingDetails[provider._id]?.time || ""}
                    onChange={(e) =>
                      handleTimeChange(provider._id, e.target.value)
                    }
                    className="w-full p-2 border rounded"
                  />
                </div>
              </div>

              {/* Request Button */}
              <button
                onClick={() => handleRequest(provider._id)}
                className="mt-4 bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition w-full"
              >
                Request Service
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceProviderList;