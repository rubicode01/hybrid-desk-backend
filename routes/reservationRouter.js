import express from "express";
import {
  getSingleReservation,
  createReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const reservationRouter = express.Router();

reservationRouter
  .route("/:user_id")
  .get(getSingleReservation)
  .post(createReservation)
  .delete(deleteReservation);

export default reservationRouter;
