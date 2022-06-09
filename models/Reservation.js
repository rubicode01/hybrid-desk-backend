import mongoose from "mongoose";
import User from "../models/User.js";
import Place from "../models/Place.js";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },
  // user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // newPlace: [{ type: Schema.Types.ObjectId, ref: "Place" }],
});
export default model("Reservation", reservationSchema);
