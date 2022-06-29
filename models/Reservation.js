import mongoose from "mongoose";
import User from "../models/User.js";
import Place from "../models/Place.js";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  // Informationen über den User der buchen will
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  // Sitzplatz den sich der User ausgesucht hat
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },

  // zeitraum (von /bis) der User den Platz in anspuch nehmen will
  date: { type: Date },

  // user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  // newPlace: [{ type: Schema.Types.ObjectId, ref: "Place" }],
});
export default model("Reservation", reservationSchema);
