import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import protectedRoute from "./routes/protectedRoutes.js";
import userRouter from "./routes/userRouter.js";
import placeRouter from "./routes/placeRouter.js";
import reservationRouter from "./routes/reservationRouter.js";
// import placeRouter from "./routes/placeRouter.js";

// import protectedRoute from "./routes/protectedRoutes.js";
// import users from "./routes/userRouter.js";
// import cors from "cors";



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
  origin: process.env.REACT_APP_URI, // nur Zugriff von dieser Domain erlauben
  exposedHeaders: "Authorization", //dem Frontend Zugriff auf die Header-Property "Authorization" geben
};

app.use(cors(corsOptions));
app.use(express.json());


//Image Upload
// app.get("/upload", (req, res) => {
//   res.render("upload");
// });
// app.post("/upload",upload.single('image'), (req, res) => {
//   res.send("Image Uploaded");
// });

//Router Place
app.use("/api/place", placeRouter);

//User
app.use("/user", userRouter);
app.use("/info", protectedRoute); //bookingprocess
app.get("/", (req, res) => res.send("geht"));


// //Place
app.use("/place", placeRouter);

// //Reservations
app.use("/reservation", reservationRouter);

//All

app.listen(port, () => console.log(`Server listening on port ${port}`));
