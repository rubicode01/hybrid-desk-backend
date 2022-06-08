import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = Schema({
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
  newPlace: [{ type: Schema.Types.ObjectId, ref: "Place" }],
});
export default model("Reservation", reservationSchema);
