import express from "express";
import {
  getAllAvailablePlacesbyLocation,
  createPlace,
} from "../controllers/placeController.js";

const placeRouter = express.Router();

placeRouter.route("/").get(getAllAvailablePlacesbyLocation).post(createPlace);

export default placeRouter;
