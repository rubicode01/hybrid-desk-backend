import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import protectedRoute from "./routes/protectedRoutes.js";
import userRouter from "./routes/userRouter.js";
import placeRouter from "./routes/placeRouter.js";
import reservationRouter from "./routes/reservationRouter.js";

import cors from "cors";
import { upload } from "./middleware/multer.js";
import path from "path";

const app = express();
const port = process.env.PORT || 5000;
// const multer = require("multer");
// const path = require ('path')
// const storage =multer.diskStorage({destination:(req, file, cb)=>{cb(
//   null, 'images'
// )}
// filename: (req, file, cb) =>{
//   console.log(file)
//   cb(null, Date.now() + path.extname(file.originalname))
// }
//  })

// const upload = multer({storage: })

//Middleware
const corsOptions = {
  // origin: process.env.REACT_APP_URI,
  origin: "http://localhost:8100",

  exposedHeaders: "Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());

//Multer Upload
app.use(express.static(path.resolve("./public")));
app.post("/single", upload.single("images"), (req, res) => {
  console.log(req.file);
  res.send("Profile Image uploaded successfully");
});

//User
app.use("/user", userRouter);
app.use("/info", protectedRoute);

// //Place
app.use("/place", placeRouter);

// //Reservations
app.use("/reservation", reservationRouter);

//All
app.get("/", (req, res) => res.send("geht"));
app.listen(port, () => console.log(`Server listening on port ${port}`));
