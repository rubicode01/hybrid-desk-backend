import Place from "../models/Place.js";

export const getAllAvailablePlacesbyLocation = async (req, res) => {
  //location & selectedDate aus req.query
  //Abfrage der Places Collection (mit .find())
  //find all documents (1 document = ein Sitzplatz) wo location=location aus der query & selectedDate ist nicht im unavailable array
};

//den controller benutzen ausschließlich Admins
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
