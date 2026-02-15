import express from "express";
import {updateProviderProfile} from "../controllers/updateProvider.js";
import authMiddleware from "../middlewares/authMiddlewares.js";

const router=express.Router();
router.post("/providerprofile",authMiddleware,updateProviderProfile);

export default router;