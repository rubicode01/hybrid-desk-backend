import express from "express";
import { getAllUsers, createNewUser } from "../controllers/userControllers.js";

const placeRouter = express.Router();

//Allgemein
placeRouter.route("/").get(getAllUsers).post(createNewUser);

export default placeRouter;
