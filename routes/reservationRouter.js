import express from "express";
import {
  getAllReservations,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

//Allgemein

reservationRouter.route("/").get(getAllReservations).post(createReservation);
reservationRouter.route("/:id").delete(deleteReservation);

export default reservationRouter;
