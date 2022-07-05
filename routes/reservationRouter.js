import express from "express";
import {
  getAllReservations,
  getSingleReservation,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

//Allgemein

// reservationRouter.route("/").get(getAllReservations);

reservationRouter
  .route("/:user_id")
  .get(getSingleReservation)
  .post(createReservation)
  .delete(deleteReservation);

export default reservationRouter;
