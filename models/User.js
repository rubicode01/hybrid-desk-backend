import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  department: { type: String },
  company: { type: String },
  image: { type: String },
});

export default model("User", userSchema);
