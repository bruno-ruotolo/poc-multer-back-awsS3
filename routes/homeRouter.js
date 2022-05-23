import { Router } from "express";
import multer from "multer";

import { postHome, getHome } from "../controllers/homeController.js";
import { multerConfig } from "../middlewares/multerMiddleware.js";
import { imageSchema } from "../schemas/imageSchema.js";

const homeRouter = Router();

homeRouter.post("/", multer(multerConfig).single('file'), imageSchema, postHome);
homeRouter.get("/", getHome);

export default homeRouter;