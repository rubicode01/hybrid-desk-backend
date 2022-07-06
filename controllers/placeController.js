import Place from "../models/Place.js";

export const getAllAvailablePlacesbyLocation = async (req, res) => {
  try {
    const { location, room } = req.query;
    console.log(room);
    if (room == "meetingroom") {
      const findAllAvailableMeetingrooms = await Place.find({
        location,
        meetingroom: true,
      });
      res.status(200).json(findAllAvailableMeetingrooms);
    } else if (room == "workplace") {
      const findAllAvailableWorkplaces = await Place.find({
        location,
        workplace: true,
      });
      res.status(200).json(findAllAvailableWorkplaces);
    }
  } catch (error) {
    res.status(500).json("not possible");
  }
};

export const createPlace = async (req, res) => {
  try {
    const { location, workplace, meetingroom, seat } = req.body;
    const newPlace = await Place.create({
      location,
      workplace,
      meetingroom,
      seat,
    });
    res.status(201).json(newPlace);
  } catch (error) {
    res.status(500).json("not possible");
  }
};
