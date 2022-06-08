import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  department: { type: String },
  company: { type: String },
  image: { type: String },
  newPlace: [{ type: Schema.Types.ObjectId, ref: "Place" }],
});
export default model("User", userSchema);
