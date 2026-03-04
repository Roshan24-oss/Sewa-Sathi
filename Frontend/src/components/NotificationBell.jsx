import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import socket from "../socket";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const { data } = await axiosInstance.get("/requests/notifications");
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };
    fetchNotifications();
  }, []);

  // Listen for real-time notifications
  useEffect(() => {
    socket.on("newNotification", (data) => {
      setNotifications((prev) => [data, ...prev]);
    });
    return () => socket.off("newNotification");
  }, []);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  // Mark notification as read
  const markAsRead = async (id) => {
    try {
      await axiosInstance.put(`/notifications/${id}`);
      setNotifications((prev) =>
        prev.map((n) => (n._id === id ? { ...n, isRead: true } : n))
      );
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  };

  // Delete notification
  const deleteNotification = async (id) => {
    try {
      await axiosInstance.delete(`/notifications/${id}`);
      setNotifications((prev) => prev.filter((n) => n._id !== id));
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  return (
    <div className="relative">
      {/* 🔔 Bell Icon */}
      <div
        className="cursor-pointer text-2xl relative"
        onClick={() => setOpen(!open)}
      >
        🔔
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white shadow-xl rounded-xl p-4 z-50">
          <h3 className="font-bold mb-3 text-gray-700">Notifications</h3>
          {notifications.length === 0 && (
            <p className="text-gray-500 text-sm">No notifications yet.</p>
          )}
          <div className="max-h-80 overflow-y-auto space-y-2">
            {notifications.map((n) => (
              <div
                key={n._id}
                className={`p-3 rounded-lg text-sm transition flex justify-between items-center ${
                  n.isRead
                    ? "bg-gray-100 text-gray-600"
                    : "bg-blue-100 text-blue-800 font-medium"
                }`}
              >
                {/* Notification Message */}
                <span
                  className="cursor-pointer flex-1"
                  onClick={() => markAsRead(n._id)}
                >
                  {n.message}
                </span>

                {/* ❌ Delete Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNotification(n._id);
                  }}
                  className="ml-3 text-red-500 hover:text-red-700 font-bold"
                >
                  ✖
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;