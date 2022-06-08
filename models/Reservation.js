import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  _id: { type: String, unique: true },
  location: Boolean,
  workplace: Boolean,
  meetingroom: Boolean,
  date: Number,
  time: Number,
  floor: Number,
  seat: Number,
});

export default model("Reservation", reservationSchema);
