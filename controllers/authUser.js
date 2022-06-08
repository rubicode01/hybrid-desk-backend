// import User from "../models/User.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export const signUp = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     //console.log(hashedPassword);
//     //neuen User in die DB schreiben
//     const newUser = await User.create({
//       email,
//       password: hashedPassword,
//     });
//     //token kreieren
//     const token = jwt.sign(
//       { email: newUser.email }, //payload
//       process.env.JWT_SECRET, //secret
//       { expiresIn: "1h" } //options
//     );
//     //console.log(token);
//     if (token && newUser) {
//       res
//         .status(201)
//         .set("Authorization", token) //fügt dem Header der Response ein Feld "Authorization" hinzu mit dem Wert des tokens
//         .send("User successfully created");
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const logIn = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     //User finden
//     const findUser = await User.findOne({ email }).select("+password");
//     //Checken, ob PW korrekt
//     const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
//     console.log(isPasswordCorrect); //returnt true oder false
//     //Falls ja token kreieren und zurückschicken
//     if (isPasswordCorrect) {
//       const token = jwt.sign(
//         { email: findUser.email },
//         process.env.JWT_SECRET,
//         { expiresIn: "1h" }
//       );
//       res.status(200).set("Authorization", token).send("Login successful");
//     } else {
//       res.status(401).send("Unauthorized");
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const getUserInfo = async (req, res) => {
//   try {
//     const { email } = req.user;
//     const findUser = await User.findOne({ email });
//     res.status(200).json(findUser);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// export const verifySession = (req, res) => {
//   res.status(200).send("Token successfully verified");
// };
