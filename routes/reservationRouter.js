import express from "express";
import {
  getAllReservations,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

//Allgemein

// reservationRouter.route("/").get(getAllReservations);

reservationRouter
  .route("/:user_id")
  .post(createReservation)
  .delete(deleteReservation);

export default reservationRouter;
