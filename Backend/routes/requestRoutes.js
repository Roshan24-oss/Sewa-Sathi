import express from "express";
import{
    createRequest,getProviderRequests,
    updateRequestStatus,
} from "../controllers/requestController.js";
import authMiddleware from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.post("/",authMiddleware,createRequest);
router.get("/provider",authMiddleware,getProviderRequests);
router.put("/:id",authMiddleware,updateRequestStatus);

export default router;