import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axiosInstance from "../api/axiosInstance";

const ServiceProviderList = () => {
  const { user } = useContext(AuthContext);
  const { serviceType } = useParams();
  const [providers, setProviders] = useState([]);

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
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition relative flex flex-col justify-between"
            >
              {/* Provider Info */}
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-2">
                  {provider.fullName}
                </h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Experience:</span>{" "}
                  {provider.experience} years
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Address:</span> {provider.address}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Skills:</span> {provider.skills}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Phone:</span> {provider.phone}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Availability:</span>{" "}
                  {provider.availability}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">About:</span> {provider.about}
                </p>
              </div>

              {/* Request Button */}
              <button className="mt-4 bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-amber-700 transition w-full">
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