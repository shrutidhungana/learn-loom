import { Request, Response } from "express";
import * as featureImageModel from "../models/featureImageModel";

export const getFeatureImages = async (req: Request, res: Response) => {
  try {
    const images = await featureImageModel.getAllFeatureImages();
    res.status(200).json({
      data: images,
      status: "success",
      message: "Feature images retrieved successfully",
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      status: "error",
      message: "Failed to retrieve feature images",
    });
  }
};

export const createFeatureImage = async (req: Request, res: Response) => {
    try {
        console.log("Received body:", req.body);
    const { url, title, display_order } = req.body;

    if (!url || !title || display_order === undefined) {
      return res.status(400).json({
        data: null,
        status: "error",
        message: "Missing required fields: url, title, or display_order",
      });
    }

    // Check for duplicates (same URL)
    const allImages = await featureImageModel.getAllFeatureImages();
    const alreadyExists = allImages.some((img) => img.url === url);

    if (alreadyExists) {
      return res.status(409).json({
        data: null,
        status: "error",
        message: "Feature image with this URL already exists",
      });
    }

    await featureImageModel.addFeatureImage({ url, title, display_order });

    res.status(201).json({
      data: null,
      status: "success",
      message: "Feature image added successfully",
    });
    } catch (err) {
        console.error("Error in createFeatureImage:", err); 
    res.status(500).json({
      data: null,
      status: "error",
      message: "Failed to add feature image",
    });
  }
};

export const deleteFeatureImage = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (!id) {
      return res.status(400).json({
        data: null,
        status: "error",
        message: "Invalid ID",
      });
    }

    await featureImageModel.deleteFeatureImage(id);

    res.status(200).json({
      data: null,
      status: "success",
      message: "Feature image deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      data: null,
      status: "error",
      message: "Failed to delete feature image",
    });
  }
};
