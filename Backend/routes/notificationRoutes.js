// routes/notificationRoutes.js
import express from "express";
import Notification from "../models/Notification.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import {deleteNotification} from "../controllers/notificationController.js";

const router = express.Router();

router.delete("/notifications/:id",authMiddleware,deleteNotification);
router.put("/notifications/:id", authMiddleware, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: "Error updating notification" });
  }
});


export default router; 