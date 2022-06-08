import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placeSchema = Schema({
  location: String,
  workplace: String,
  meetingroom: String,
  date: String,
  time: String,
  floor: String,
  seat: String,
  user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model("Place", placeSchema);
