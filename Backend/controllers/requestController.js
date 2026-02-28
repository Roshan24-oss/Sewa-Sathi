import Request from "../models/RequestModel.js";


export const createRequest = async (req, res) => {
  try {
    const { providerId, serviceType, date, time } = req.body;

    let newRequest = new Request({
      customerId: req.user.id,
      providerId,
      serviceType,
      date,
      time,
      status: "pending",
    });

    await newRequest.save();

    // Populate customer info before emitting
    newRequest = await newRequest.populate("customerId", "fullName email");

    const io = req.app.get("io");

    io.to(providerId.toString()).emit("newRequest", {
      message: "New service request received",
      request: newRequest,
    });

    res.status(201).json({
      message: "Request sent successfully",
      request: newRequest,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error sending request",
      error: error.message,
    });
  }
};


export const getProviderRequests = async (req, res) => {
  try {
    const requests = await Request.find({
      providerId: req.user.id,
    }).populate("customerId", "fullName email");

    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching requests",
      error: error.message,
    });
  }
};


export const updateRequestStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updatedRequest = await Request.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ message: "Request not found" });
    }

    const io = req.app.get("io");

    io.to(updatedRequest.customerId.toString()).emit(
      "requestStatusUpdated",
      {
        message: `Your request has been ${status}`,
        request: updatedRequest,
      }
    );

    res.status(200).json({
      message: "Request status updated",
      request: updatedRequest,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating request status",
      error: error.message,
    });
  }
};