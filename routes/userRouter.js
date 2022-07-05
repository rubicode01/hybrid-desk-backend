import express from "express";
import {
  getAllUsers,
  logIn,
  signUp,
  verifySession,
  getSingleUser,
  getUserInfo,
  updateSingleUser,
  // deleteSingleUser,
} from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

//User Router => authorization & authentification
userRouter.post("/signup", signUp); // create User Account
userRouter.post("/login", logIn); // User-Login
userRouter.get("/verify", verifyToken, getUserInfo); // verify-User

//Nice to have
// userRouter.put(updateSingleUser); // User Update
// userRouter.delete(deleteSingleUser); // delete User Account

//User Admin Router -> get all Users
userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").get(getSingleUser).put(updateSingleUser);
//   .delete(deleteSingleUser);

// userRouter.route("/:id").put(updateSingleUser);
// .delete(deleteSingleUser);

//Nice to have
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
