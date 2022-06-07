import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { first: String, last: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  department: { type: String, required: true },
  image: { type: String },
});
