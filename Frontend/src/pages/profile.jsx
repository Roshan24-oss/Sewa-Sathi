import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axiosInstance.get("/users/profile");
        setUser(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) {
    return (
      <div className="mt-24 text-center text-gray-600">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pt-28 pb-10 px-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-orange-400 shadow-md"
          />

          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user.fullName}
          </h2>

          <p className="text-gray-500">{user.role}</p>
        </div>

        {/* Profile Info */}
        <div className="mt-6 space-y-4">

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">📧 Email</p>
            <p className="font-medium text-gray-800">{user.email}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">📞 Phone</p>
            <p className="font-medium text-gray-800">{user.phone}</p>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">📍 Address</p>
            <p className="font-medium text-gray-800">
              {user.address || "Not provided"}
            </p>
          </div>

        </div>

        {/* Edit Button */}
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition">
          ✏️ Edit Profile
        </button>

      </div>
    </div>
  );
};

export default Profile;