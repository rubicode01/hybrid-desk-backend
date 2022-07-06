import Place from "../models/Place.js";
import Reservation from "../models/Reservation.js";

export const getAllReservations = async (req, res) => {
  try {
    const allReservations = await Reservation.find(req.query).populate(
      "user place"
    );
    res.json({
      success: true,
      data: allReservations,
      msg: "show all reservations",
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAllReservations = async (req, res) => {
  try {
    const deleteAll = await Reservation.find();
    res.status(200).json({ reservations: deleteAll });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createReservation = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { place_id, date } = req.body;
    // console.log(user_id, place_id, date);
    const newReservation = await Reservation.create({
      user_id,
      place_id,
      date,
    });

    // console.log(newReservation);

    const updatePlaceUnavailability = await Place.findByIdAndUpdate(
      place_id,
      { $push: { unavailable: date } },
      { new: true }
    );
    console.log(updatePlaceUnavailability);

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

export const getSingleReservation = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { place_id, date } = req.body;
    console.log(user_id, place_id, date);
    const newReservation = await Reservation.findById({
      user_id,
      place_id,
      date,
    });

    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
};

export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;
    await Reservation.findByIdAndDelete(id);
    res.status(200).send("Reservation successfully deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};
