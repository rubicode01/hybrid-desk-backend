import express from "express";
import {
  getAllUsers,
  logIn,
  signUp,
  getSingleUser,
  getUserInfo,
  updateSingleUser,
} from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const userRouter = express.Router();

//User Router => authorization & authentification
userRouter.post("/signup", signUp); // create User Account
userRouter.post("/login", logIn); // User-Login
userRouter.get("/verify", verifyToken, getUserInfo); // verify-User

//User Admin Router -> get all Users
userRouter.route("/").get(getAllUsers);

userRouter.route("/:id").get(getSingleUser).put(updateSingleUser);

export default userRouter;
