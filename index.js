import "dotenv/config.js";
import "./db/client.js";
import express from "express";
import userRouter from "./routes/userRouter.js";
import placeRouter from "./routes/placeRouter.js";
import reservationRouter from "./routes/reservationRouter.js";
// import cors from "cors";
// import placeRouter from "./routes/placeRouter.js";

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
// app.use(cors());
//Router User // Home Router
app.use("/api/user", userRouter);

//Router Place
app.use("/api/place", placeRouter);

//Route Reservation
app.use("/api/reservation", reservationRouter);

app.get("/", (req, res) => res.send("<h1>API!</h1>"));

// app.use("/info", protectedRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));
