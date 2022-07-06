import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placeSchema = new Schema({
  location: { type: String },
  workplace: { type: Boolean },
  meetingroom: { type: Boolean },
  unavailable: {
    type: Array,
  },

  seat: { type: Number },
  meetingnumber: { type: Number },
});

export default model("Place", placeSchema, "places");
