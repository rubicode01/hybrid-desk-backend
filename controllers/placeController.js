import Place from "../models/Place.js";

export const getAllPlaces = async (req, res) => {
  try {
    const allPlaces = await Place.find();
    res.status(200).json({ place: allPlaces });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const savePlace = async (req, res) => {
  try {
    const { location, workplace, meetingroom, date, time, floor, seat } =
      req.body;
    const newPlace = await Place.create({
      location,
      workplace,
      meetingroom,
      date,
      time,
      floor,
      seat,
    });
    res.staus(201).json(newPlace);
  } catch (error) {
    res.status(500).json("not possible");
  }
};

// export const updatePlace = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { location, workplace, meetingroom, date, time, floor, seat } =
//       req.body;
//     const modifiedPlace = await Place.findByIdAndUpdate(
//       id,
//       { location, workplace, meetingroom, date, time, floor, seat },
//       { new: true }
//     );
//     res.status(200).json(modifiedPlace);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
