import { Router } from "express";
import { getAllDataController } from "../controllers/getAllData.js";
import { getDataByPathParamController } from "../controllers/getDataByPathParam.js";
import { postDataController } from "../controllers/postData.js";

export const apiRouter = Router();

apiRouter.get("/", getAllDataController);
apiRouter.get("/:field/:term", getDataByPathParamController);
apiRouter.post("/", postDataController);
