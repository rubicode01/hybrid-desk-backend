import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

try {
  await mongoose.connect(uri);
  console.log("Connection");
} catch (err) {
  console.log(err);
}
