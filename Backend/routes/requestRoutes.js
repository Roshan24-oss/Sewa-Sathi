import express from "express";
import {
  createRequest,
  getProviderRequests,
  updateRequestStatus,
  getCustomerRequests,
} from "../controllers/requestController.js";

import authMiddleware from "../middlewares/authMiddlewares.js";
import Notification from "../models/Notification.js";

const router = express.Router();

router.post("/", authMiddleware, createRequest);
router.get("/provider", authMiddleware, getProviderRequests);
router.put("/:id", authMiddleware, updateRequestStatus);
router.get("/activities", authMiddleware, getCustomerRequests);


router.get("/notifications", authMiddleware, async (req, res) => {
  try {
    const notifications = await Notification.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: "Error fetching notifications" });
  }
});

export default router;