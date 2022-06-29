import Reservation from "../models/Reservation.js";

// export const getAllReservations = async (req, res) => {
//   try {
//     const allReservations = await Reservation.find();
//     res.status(200).json({ reservations: allReservations });
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

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
    const { id } = req.body; //woher wollt ihr die user ID ziehen / wie wollt ihr sie vom frontend aus verschicken? (params is meine empfehlung)
    const { location, datetime, room, seat } = req.body; // mit den infos aus der overview seite
    const newReservation = await Reservation.create(id, {
      location,
      datetime,
      room,
      seat,
    });
    const updatePlaceUnavailability = async (req, res) => {
      //ihr braucht place id und datetime
      //places model importieren
      //Places.findByIdAndUpdate(wo id = placeid & was soll gemacht werden -> unavaible field updaten indem datetime in den array gepusht wird)
    };

    // const newReservation = await Reservation.create(
    //   { user, place } // wenn wir nur die user ID wollen, was muss in geschweifte klammer rein?

    // const { user, place } = req.body;
    // const newReservation = await Reservation.create(
    //   { user, place }
    // user,
    // // {
    // //   first_name,
    // //   last_name,
    // // },
    // place,
    // {
    //   location,
    //   floor,
    //   seat,
    // }

    res.staus(201).json(newReservation);
  } catch (error) {
    res.status(500).json("Reservation successfully!");
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
