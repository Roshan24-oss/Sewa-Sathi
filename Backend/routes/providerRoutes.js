import express from "express";
import {updateProviderProfile} from "../controllers/updateProvider.js";
import authMiddleware from "../middlewares/authMiddlewares.js";
import User from "../models/User.js";

const router=express.Router();
router.post("/providerprofile",authMiddleware,updateProviderProfile);



router.get("/:serviceType", async (req, res) => {
  try {
    const { serviceType } = req.params;

    const providers = await User.find({
      role: "provider",
      services: {$regex:new RegExp("^"+serviceType+"$","i")}
    }).select("-password");

    res.status(200).json(providers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;