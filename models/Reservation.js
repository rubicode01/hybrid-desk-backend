import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reservationSchema = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  place_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Place",
  },

  date: { type: Date },
});
export default model("Reservation", reservationSchema);
