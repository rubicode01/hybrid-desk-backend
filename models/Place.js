import mongoose from "mongoose";

const { Schema, model } = mongoose;

const placeSchema = new Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  location: { type: String },
  workplace: { type: Boolean },
  meetingroom: { type: Boolean },
  unavailable: {
    type: Array,
    // type: [
    //   {
    //     date: { type: Date },
    //   },
    // ],
  },
  // floor: { type: Number },
  seat: { type: Number },
  meetingnumber: { type: Number },

  // user: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model("Place", placeSchema, "places");
