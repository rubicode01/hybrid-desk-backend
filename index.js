import "dotenv/config.js";
import express from "express";
import userRouter from "./routes/userRouter.js";
import placeRouter from "./routes/placeRouter.js";

// import protectedRoute from "./routes/protectedRoutes.js";
// import users from "./routes/userRouter.js";
// import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

//Middleware
// const corsOptions = {
//   origin: process.env.PG_CONNECTIONSTRING, // nur Zugriff von dieser Domain erlauben
//   exposedHeaders: "Authorization", //dem Frontend Zugriff auf die Header-Property "Authorization" geben
// };
// app.use(cors(corsOptions));
app.use(express.json());

//Router User
app.use("/", userRouter);

//Router Place
app.use("/booking", placeRouter);

// app.use("/info", protectedRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
