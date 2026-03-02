import Request from "../models/RequestModel.js";
import Notification from "../models/Notification.js";

/* =========================================
   CREATE REQUEST (Customer → Provider)
========================================= */
export const createRequest = async (req, res) => {
  try {
    const { providerId, serviceType, date, time } = req.body;

    // Create new request
    let newRequest = new Request({
      customerId: req.user._id, // now req.user has fullName
      providerId,
      serviceType,
      date,
      time,
      status: "pending",
    });

    await newRequest.save();

    // Populate customer details
    newRequest = await newRequest.populate("customerId", "fullName email");

    const io = req.app.get("io");

    // ---------- Create Notification for Provider ----------
    const notification = await Notification.create({
      userId: providerId,
      message: `New service request from ${newRequest.customerId.fullName}`,
      type: "request",
    });

    // ---------- Emit Real-Time Events ----------
    io.to(providerId.toString()).emit("newRequest", {
      message: "New service request received",
      request: newRequest,
    });

    io.to(providerId.toString()).emit("newNotification", notification);

    res.status(201).json({
      message: "Request sent successfully",
      request: newRequest,
    });
  } catch (error) {
    console.error("createRequest error:", error);
    res.status(500).json({
      message: "Error sending request",
      error: error.message,
    });
  }
};

/* =========================================
   GET PROVIDER REQUESTS
========================================= */
export const getProviderRequests = async (req, res) => {
  try {
    const requests = await Request.find({ providerId: req.user._id })
      .populate("customerId", "fullName email")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    console.error("getProviderRequests error:", error);
    res.status(500).json({
      message: "Error fetching provider requests",
      error: error.message,
    });
  }
};

/* =========================================
   UPDATE REQUEST STATUS (Provider → Customer)
========================================= */
export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const request = await Request.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    request.status = status;
    await request.save();

    const io = req.app.get("io");

    // ---------- Create Notification for Customer ----------
    const notification = await Notification.create({
      userId: request.customerId,
      message: `Your request has been ${status}`,
      type: "status",
    });

    // ---------- Emit Real-Time Events ----------
    io.to(request.customerId.toString()).emit("requestStatusUpdated", {
      message: `Your request has been ${status}`,
      request,
    });

    io.to(request.customerId.toString()).emit("newNotification", notification);

    res.status(200).json({
      message: "Request status updated successfully",
      request,
    });
  } catch (error) {
    console.error("updateRequestStatus error:", error);
    res.status(500).json({
      message: "Error updating request status",
      error: error.message,
    });
  }
};

/* =========================================
   GET CUSTOMER REQUESTS
========================================= */
export const getCustomerRequests = async (req, res) => {
  try {
    const requests = await Request.find({ customerId: req.user._id })
      .populate("providerId", "fullName phone serviceType")
      .sort({ createdAt: -1 });

    res.status(200).json(requests);
  } catch (error) {
    console.error("getCustomerRequests error:", error);
    res.status(500).json({
      message: "Error fetching customer requests",
      error: error.message,
    });
  }
};