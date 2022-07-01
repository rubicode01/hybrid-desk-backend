import express from "express";
import { getUserInfo } from "../controllers/userControllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const protectedRoute = express.Router();

protectedRoute.get("/me", verifyToken, getUserInfo);

export default protectedRoute;
