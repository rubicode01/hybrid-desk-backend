import express from "express";
import {
  getAllUsers,
  createNewUser,
  updateSingleUser,
  deleteSingleUser,
  getSingleUser,
} from "../controllers/userControllers.js";

const userRouter = express.Router();

//Allgemein
userRouter.route("/").get(getAllUsers).post(createNewUser);
userRouter
  .route("/:id")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteSingleUser);

// userRouter.post("/signup", signUp);
// userRouter.post("/login", logIn);
// userRouter.get("/verify", verifyToken, verifySession);

//User

// userRouter
//   .route("/login/:id")
//   .get(getSingleUser)
//   .post(createSingleBooking)
//   .put(updateSingleBooking);
// userRouter.get("/login/:id", getSingleUser);
// userRouter.post("/login/:id/booking", createSingleBooking);
// userRouter.put("/login/:id/booking", updateSingleBooking);

//Admin
// userRouter.get("/admin", getAllUser);

export default userRouter;
