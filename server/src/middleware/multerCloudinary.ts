import { v2 as cloudinary, UploadApiResponse } from "cloudinary";

import { CloudinaryStorage } from "multer-storage-cloudinary";
import configkey from "../config";
import multer from "multer";
import { Request, RequestHandler } from "express";

interface CloudinaryStorageOptions {
  cloudinary: any;
  params: {
    folder: string;
    resource_type: string;
    allowed_formats: string[];
    public_id: (req: Request, file: Express.Multer.File) => string;
  };
}

// Cloudinary configuration
cloudinary.config({
  cloud_name: configkey.CLOUD_NAME,
  api_key: configkey.API_KEY,
  api_secret: configkey.APP_SECRET,
});

// Multer configuration

const storageOptions: CloudinaryStorageOptions = {
  cloudinary: cloudinary,
  params: {
    folder: "job-portal-profile",
    resource_type: "auto",
    allowed_formats: ["jpg", "jpeg", "png", "pdf"],
    public_id: (req: Request, file: Express.Multer.File): string => {
      const fileName = file.originalname.split(".").slice(0, -1).join(".");
      return fileName;
    },
  },
};

const storage = new CloudinaryStorage(storageOptions);
const upload: RequestHandler = multer({ storage: storage }).single("image");
export { upload };
