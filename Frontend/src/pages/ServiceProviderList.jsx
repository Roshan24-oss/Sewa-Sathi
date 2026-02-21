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
        const res = await axiosInstance.get(
          `/provider/${serviceType}`
        );
        setProviders(res.data);
      } catch (error) {
        console.error("Error fetching providers:", error);
      }
    };

    fetchProviders();
  }, [serviceType]);

  return (
    <div className="mt-25 w-full min-h-screen">
      <h2>{serviceType?.toUpperCase()} List</h2>

      {providers.length === 0 ? (
        <p>No providers available</p>
      ) : (
        providers.map((provider) => (
          <div key={provider._id}>
            <h3>{provider.fullName}</h3>
            <p>Experience: {provider.experience} years</p>
            <p>Address: {provider.address}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ServiceProviderList;