import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  try {
    const { first_name, last_name, email, password, image } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    //neuen User in Datenbank schreiben
    const newUser = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
      image,
    });

    //token

    const token = jwt.sign(
      { email: newUser.email }, //payload
      process.env.JWT_SECRET, // secret
      { expiresIn: "1h" } // options
      // { image: newUser.image } //?? check
    );
    if (token && newUser) {
      res
        .status(201)
        .set("Authorization", token)
        .send("Account successfully created");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    //User finden
    const findUser = await User.findOne({ email }).select("+password");
    //Checken, ob PW korrekt
    const isPasswordCorrect = await bcrypt.compare(password, findUser.password);
    console.log(isPasswordCorrect); //returnt true oder false
    //Falls ja token kreieren und zurückschicken
    if (isPasswordCorrect) {
      const token = jwt.sign(
        { email: findUser.email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).set("Authorization", token).send("Login successful"); //zusätzlich schicken: findUser._id
    } else {
      res.status(401).send("Unauthorized");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserInfo = async (req, res) => {
  try {
    const { email } = req.user;
    const findUser = await User.findOne({ email });
    res.status(200).json(findUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const verifySession = (req, res) => {
  res.status(200).send("Token successfully verified");
};

//???

export const updateSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email } = req.body;
    const modifiedUser = await User.findByIdAndUpdate(
      id,
      { first_name, last_name, email },
      { new: true }
    );
    res.status(200).json(modifiedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Admin
export const getAllUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    res.status(200).json({ users: allUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findById(id);
    res.status(200).json(singleUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(500).json(error);
  }
};
