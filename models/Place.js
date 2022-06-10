import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placeSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  location: { type: String },
  workplace: { type: String },
  meetingroom: { type: String },
  date: { type: String },
  time: { type: String },
  floor: { type: String },
  seat: { type: String },

  // user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model("Place", placeSchema, "places");
