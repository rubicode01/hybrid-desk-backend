import express from "express";
import { savePlace, getAllPlaces } from "../controllers/placeController.js";

const placeRouter = express.Router();

//Allgemein

placeRouter.route("/").get(getAllPlaces).post(savePlace);

// placeRouter.route("/:id/place/workplace").post(saveWorkplace);
//Nice to have
// placeRouter.route("/:id/place/meetingroom").post(chooseMeetingroom);
// placeRouter.route("/:id/place/date").post(saveDate);
// placeRouter.route("/:id/place/time").post(saveTime);
// placeRouter.route("/:id/place/floor").post(saveFloor);
// placeRouter.route("/:id/place/seat").post(saveSeat);
// placeRouter.route("/:id/place/overview").post(bookingOverview);
// placeRouter.route("/:id/place/history").post(bookingHistory);

export default placeRouter;
