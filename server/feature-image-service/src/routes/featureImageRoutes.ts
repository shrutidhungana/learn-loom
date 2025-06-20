import express, {Router, RequestHandler} from "express";
import {
  getFeatureImages,
  createFeatureImage,
  deleteFeatureImage,
} from "../controllers/featureImageController";

const router: Router = express.Router();

router.get("/lists", getFeatureImages as RequestHandler);
router.post("/add", createFeatureImage as RequestHandler);
router.delete("/delete/:id", deleteFeatureImage as RequestHandler);

export default router;
